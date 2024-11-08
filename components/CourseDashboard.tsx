'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BookOpen } from 'lucide-react';

const courseDashboard: React.FC = () => {
  const courseData = {
    "一年级": [
      { name: "计算机概论", original: "電子計算機概論", description: "计算机基础知识" },
      { name: "C# .NET开发", original: "程式設計一", description: "基础编程入门" },
      { name: "商用微积分", original: "微積分", description: "数学基础" },
      { name: "管理学", original: "管理學", description: "管理理论基础" },
      { name: "英语口语课", original: "英語聽講實習", description: "英语交际能力" },
      { name: "传播理论与素养", original: "媒體識讀", description: "媒体传播基础" },
      { name: "概率论", original: "概率论", description: "统计学基础" },
      { name: "艺术概论", original: "藝術概論", description: "艺术理论基础" },
      { name: "动画制作", original: "多媒體開發", description: "多媒体设计基础" }
    ],
    "二年级": [
      { name: "计算机网络", original: "電腦網路", description: "网络通信基础" },
      { name: "数据结构", original: "資料結構", description: "编程进阶" },
      { name: "Java安卓开发", original: "物件導向程式設計", description: "移动应用开发" },
      { name: "前端开发认证", original: "網頁程式認證", description: "Web开发基础" },
      { name: "组织管理理论", original: "組織行為", description: "企业管理进阶" },
      { name: "FPGA开发", original: "數位邏輯設計", description: "硬件编程" },
      { name: "前端设计", original: "網頁程式設計", description: "Web开发进阶" },
      { name: "初级会计", original: "會計學", description: "财务基础" },
      { name: "离散数学", original: "離散數學", description: "计算机数学基础" }
    ],
    "三年级": [
      { name: "Cisco网络实务", original: "網路實務", description: "网络工程实践" },
      { name: "UE4游戏制作", original: "遊戲製作", description: "游戏开发基础" },
      { name: "C# .NET网络编程", original: "網路程式設計", description: "网络应用开发" },
      { name: "UE4毕业设计", original: "畢業設計", description: "游戏开发实践" },
      { name: "数据库系统", original: "資料庫系統", description: "SQL与数据管理" },
      { name: "算法", original: "演算法", description: "算法设计与分析" },
      { name: "计算机系统", original: "計算機系統", description: "系统架构" }
    ],
    "四年级": [
      { name: "专题研究", original: "專題研究", description: "研究方法论" },
      { name: "大数据导论", original: "大數據導論", description: "Python与数据分析" },
      { name: "Linux认证", original: "LINUX認證", description: "操作系统实践" },
      { name: "信息安全", original: "資訊安全", description: "网络安全基础" }
    ]
  };

  const [activeYear, setActiveYear] = useState("全部");
  const [isLoading, setIsLoading] = useState(false);

  const allCourses = useMemo(() => {
    return Object.entries(courseData).map(([year, courses]) => 
      courses.map(course => ({
        ...course,
        year
      }))
    ).flat();
  }, []);

  const handleYearChange = (year: string) => {
    setIsLoading(true);
    setActiveYear(year);
    setTimeout(() => setIsLoading(false), 200);
  };

  interface CourseCardProps {
    course: {
      name: string;
      original: string;
      description: string;
      year?: string;
    };
    index: number;
    showYear?: boolean;
  }

  const CourseCard: React.FC<CourseCardProps> = ({ course, index, showYear = false }) => (
    <Card 
      className="p-4 hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fadeIn"
      style={{
        animationDelay: `${index * 50}ms`,
        opacity: 0,
        animation: 'fadeIn 0.5s ease-out forwards'
      }}
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-blue-100 rounded-lg transition-transform duration-300 ease-in-out transform group-hover:rotate-12">
          <BookOpen className="h-6 w-6 text-blue-600 transition-colors duration-300" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors duration-300">
              {course.name}
            </h3>
            {showYear && course.year && (
              <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded animate-fadeIn">
                {course.year}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 transition-opacity duration-300">
            {course.original}
          </p>
          <p className="text-sm mt-1 transition-opacity duration-300">
            {course.description}
          </p>
        </div>
      </div>
    </Card>
  );

  return (
    <Card className="w-full max-w-4xl animate-slideUp">
      <CardHeader>
        <CardTitle className="text-2xl text-center animate-fadeIn">
          大学课程总览
        </CardTitle>
      </CardHeader>
      <CardContent>
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 0.5s ease-out;
          }
        `}</style>
        <Tabs value={activeYear} onValueChange={handleYearChange}>
          <TabsList className="grid w-full grid-cols-5 mb-8 transition-all duration-300">
            <TabsTrigger 
              value="全部" 
              className="text-center transition-all duration-300 hover:bg-blue-50"
            >
              全部
            </TabsTrigger>
            {Object.keys(courseData).map((year) => (
              <TabsTrigger 
                key={year} 
                value={year} 
                className="text-center transition-all duration-300 hover:bg-blue-50"
              >
                {year}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <TabsContent value="全部">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allCourses.map((course, index) => (
                  <CourseCard 
                    key={index} 
                    course={course} 
                    index={index}
                    showYear={true}
                  />
                ))}
              </div>
            </TabsContent>

            {Object.entries(courseData).map(([year, courses]) => (
              <TabsContent key={year} value={year}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((course, index) => (
                    <CourseCard 
                      key={index} 
                      course={course} 
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default courseDashboard;
