import { fetchData } from '@/lib/fetchData'

export default async function CoinPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const coin = await fetchData(`coins/${id}`)

  console.log('coin', coin)

  return <div>Coin Page</div>
}
