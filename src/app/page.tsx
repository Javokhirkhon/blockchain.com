import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 h-full text-center'>
      <h1 className='text-4xl font-bold'>
        Track Your Favorite Cryptocurrencies
      </h1>
      <p className='text-lg text-gray-400'>
        Real-time updates on market prices and trends
      </p>
      <Link
        href='/coins'
        className='bg-green-500 text-black font-medium py-2 px-6 rounded-lg hover:bg-green-400 transition duration-300'
      >
        View Coins
      </Link>
    </div>
  )
}
