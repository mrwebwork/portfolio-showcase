import { RootLayout } from '@/components/RootLayout'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import clsx from 'clsx'
import '@/styles/tailwind.css'

import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Allan Hillman',
  description:
    'Passionate Front-End Web Engineer at Deloitte. Creating engaging AI apps using HTML, CSS, JS, TypeScript and React.js for flawless web experiences.',
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-blue text-base antialiased">
      <body className={clsx('mt-2 flex min-h-full flex-col', mont.className)}>
        <RootLayout>
          {children}
          <SpeedInsights />
          <Analytics />
        </RootLayout>
      </body>
    </html>
  )
}
