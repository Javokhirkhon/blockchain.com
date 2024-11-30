import { fetchData } from '@/lib/fetchData'
import { CoinsResponse } from '@/types'

export default async function CoinsPage() {
  const response = await fetchData<CoinsResponse>('simple/price', {
    ids: 'bitcoin,ethereum,dogecoin,cardano,solana',
    vs_currencies: 'usd',
    include_24hr_change: 'true',
  })

  if (!response.success) {
    return <div>{response.error}</div>
  }

  const coins = Object.entries(response.data).map(([coin, value]) => ({
    id: coin,
    price: value.usd,
    change: value.usd_24h_change?.toFixed(2) + '%',
  }))

  console.log('coins', coins)

  return <div>Coins Page</div>
}
