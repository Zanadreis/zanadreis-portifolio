import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  readonly children: React.ReactNode;
  readonly params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
 