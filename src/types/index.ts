export type CoinsResponse = {
  [key: string]: {
    usd: number
    usd_24h_change: number
  }
}

export type CoinResponse = {
  name: string
  market_data: {
    current_price: { usd: number }
    high_24h: { usd: number }
    low_24h: { usd: number }
  }
}
