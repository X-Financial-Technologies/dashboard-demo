import { useState, useEffect } from "react"

type TimeFrame = "24h" | "7d" | "30d"

type PriceData = {
  time: string
  price: string
}

type WebSocketData = {
  currentPrice: string
  nextRebase: number // timestamp
  lastRebaseAmount: string
  priceHistory: {
    "24h": PriceData[]
    "7d": PriceData[]
    "30d": PriceData[]
  }
}

const generateHistoricalData = (days: number, dataPoints: number): PriceData[] => {
  const data: PriceData[] = []
  const now = new Date()
  const msPerPoint = (days * 24 * 60 * 60 * 1000) / dataPoints

  for (let i = dataPoints - 1; i >= 0; i--) {
    const time = new Date(now.getTime() - i * msPerPoint)
    const price = (1 + (Math.random() - 0.5) * 0.01).toFixed(6) // Random price between 0.99 and 1.01
    data.push({
      time: time.toISOString(),
      price: price,
    })
  }

  return data
}

export function useWebSocket() {
  const [data, setData] = useState<WebSocketData>({
    currentPrice: "1.000000",
    nextRebase: Date.now() + 3600000, // 1 hour from now
    lastRebaseAmount: "0.013698",
    priceHistory: {
      "24h": generateHistoricalData(1, 100),
      "7d": generateHistoricalData(7, 168),
      "30d": generateHistoricalData(30, 180),
    },
  })

  useEffect(() => {
    // Simulate WebSocket connection
    const interval = setInterval(() => {
      setData((prevData) => {
        const newPrice = (1 + (Math.random() - 0.5) * 0.0002).toFixed(6)
        const newData = { ...prevData, currentPrice: newPrice }

        // Update the most recent price in each time frame
        Object.keys(newData.priceHistory).forEach((timeFrame) => {
          newData.priceHistory[timeFrame as TimeFrame][newData.priceHistory[timeFrame as TimeFrame].length - 1].price =
            newPrice
        })

        return newData
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return data
}

