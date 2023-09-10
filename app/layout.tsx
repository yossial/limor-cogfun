"use client"

import type { Metadata } from 'next';
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import { Inter } from 'next/font/google';

import Navbar from './components/navbar';
import Footer from './components/footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Limor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Limor</title>
        <meta name="description" content="Occupational Therapist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <body className={inter.className}>
          <main className='mx-8'>
            <Navbar />
            {children}
          </main>
          <Footer></Footer>
        </body>
      </ThemeProvider>
      
    </html>
  )
}
