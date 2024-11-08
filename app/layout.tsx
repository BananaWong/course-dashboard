import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '课程总览',
  description: '大学课程总览面板',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
