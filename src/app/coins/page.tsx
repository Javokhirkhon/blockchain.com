import Link from 'next/link'
import { fetchData } from '@/lib/fetchData'
import { CoinsResponse } from '@/types'
import Error from '@/components/Error'

export default async function CoinsPage() {
  const response = await fetchData<CoinsResponse>('simple/price', {
    ids: 'bitcoin,ethereum,dogecoin,cardano,solana,tether,ripple,aptos',
    vs_currencies: 'usd',
    include_24hr_change: 'true',
  })

  if (!response.success) {
    return <Error text={response.error} />
  }

  const coins = Object.entries(response.data).map(([coin, value]) => ({
    id: coin,
    price: value.usd,
    change: value.usd_24h_change?.toFixed(2) + '%',
  }))

  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Cryptocurrency Prices
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {coins.map(({ id, price, change }) => (
          <Link
            key={id}
            href={`/coins/${id}`}
            className='bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform'
          >
            <div className='text-lg font-semibold'>{id.toUpperCase()}</div>
            <div className='text-sm text-gray-400 my-2'>
              Price: ${price.toLocaleString()}
            </div>
            <div
              className={`text-sm font-medium ${
                change.startsWith('-') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              24h Change: {change}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
