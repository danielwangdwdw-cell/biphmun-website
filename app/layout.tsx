import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'BIPHMUN | BASIS International School Park Lane Harbour Model United Nations',
    template: '%s | BIPHMUN',
  },
  description:
    'BIPHMUN is the annual Model United Nations conference hosted by BASIS International School Park Lane Harbour in Huizhou, China.',
  generator: 'v0.app',
  icons: { icon: '/images/logo-mark.png' },
}

export const viewport: Viewport = {
  themeColor: '#00254F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
