//import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "../../../styles/globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }
  
    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
      </html>
    );
}
