"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { USDXPriceChart } from "@/components/usdx-price-chart"
import { RebasingInfo } from "@/components/rebasing-info"
import { RecentTransactions } from "@/components/recent-transactions"
import { useWebSocket } from "../hooks/useWebSocket"

export default function Dashboard() {
  const webSocketData = useWebSocket()

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-blue-500 p-2 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          USDX Dashboard
        </h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Supply</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,000,000 USDX</div>
            <p className="text-xs text-muted-foreground">+0.25% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(1000000 * Number(webSocketData.currentPrice)).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Real-time update</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$50,000</div>
            <p className="text-xs text-muted-foreground">+1.2% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${webSocketData.currentPrice}</div>
            <p className="text-xs text-muted-foreground">Real-time update</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <USDXPriceChart />
        <RebasingInfo />
      </div>
      <RecentTransactions />
    </div>
  )
}

