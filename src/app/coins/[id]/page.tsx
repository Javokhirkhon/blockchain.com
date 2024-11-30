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
    return <div>{response.error}</div>
  }

  return <div>{response.data.name}</div>
}
