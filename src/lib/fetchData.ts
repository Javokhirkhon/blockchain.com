const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': process.env.API_KEY || '',
  },
}

export const fetchData = async <T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> => {
  const baseUrl = process.env.BASE_URL

  const url = new URL(endpoint, baseUrl)

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })

  const response = await fetch(url.toString(), options)

  const data = await response.json()
  return data
}
