import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sudhanshu Shekhar | Senior Engineer & AI Expert',
  description: 'Portfolio of Sudhanshu Shekhar, a Senior Engineer and Full Stack Developer specializing in AI solutions, React, and Python.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
