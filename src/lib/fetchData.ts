import { FetchResult } from '@/types'

const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': process.env.API_KEY || '',
  },
  cache: 'no-cache',
}

export const fetchData = async <T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<FetchResult<T>> => {
  const baseUrl = process.env.BASE_URL

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined')
  }

  const url = new URL(endpoint, baseUrl)

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })

  try {
    const response = await fetch(url.toString(), options)

    if (!response.ok) {
      const { error } = await response.json()
      return {
        success: false,
        error: `HTTP Error | ${response.status} - ${error}`,
      }
    }

    const data = await response.json()

    return { success: true, data }
  } catch (error) {
    throw new Error(`Fetch Error | ${error}`)
  }
}
