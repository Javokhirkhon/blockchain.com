import Error from '@/components/Error'
import PriceBlock from '@/components/PriceBlock'
import { fetchData } from '@/lib/fetchData'
import { CoinResponse } from '@/types'

export default async function CoinPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetchData<CoinResponse>(`coins/${id}`)

  if (!response.success) {
    return <Error text={response.error} />
  }

  const { name, market_data } = response.data

  return (
    <>
      <h1 className='text-3xl font-bold mb-8'>{name}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        <PriceBlock
          title='Current Price'
          price={market_data.current_price.usd}
          className='text-blue-500'
        />
        <PriceBlock
          title='24h High'
          price={market_data.high_24h.usd}
          className='text-green-500'
        />
        <PriceBlock
          title='24h Low'
          price={market_data.low_24h.usd}
          className='text-red-500'
        />
      </div>
    </>
  )
}
