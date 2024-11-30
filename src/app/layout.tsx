import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blockchain.com | Be early to the future of finance',
  description:
    'Buy Bitcoin, Ethereum, and other cryptocurrencies on a platform trusted by millions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full text-white'>
      <body className='h-full flex flex-col'>
        <header className='p-4 bg-gray-800 shadow-md'>
          <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-xl font-bold'>Blockchain.com</h1>
            <nav className='space-x-4'>
              <Link href='/' className='text-gray-300 hover:text-white'>
                Home
              </Link>
              <Link href='/coins' className='text-gray-300 hover:text-white'>
                Coins
              </Link>
            </nav>
          </div>
        </header>
        <main className='flex-grow bg-gradient-to-b from-gray-900 to-black'>
          <div className='container mx-auto py-12 px-4 md:px-0 h-full'>
            {children}
          </div>
        </main>
        <footer className='p-4 bg-gray-800 text-center text-gray-300'>
          &copy; {new Date().getFullYear()} Blockchain.com. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
