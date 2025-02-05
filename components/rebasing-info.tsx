"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useWebSocket } from "../hooks/useWebSocket"

export function RebasingInfo() {
  const [countdown, setCountdown] = useState("")
  const webSocketData = useWebSocket()

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const timeLeft = webSocketData.nextRebase - now

      if (timeLeft <= 0) {
        setCountdown("Rebasing...")
      } else {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
        setCountdown(
          `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
        )
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [webSocketData.nextRebase])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rebasing Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Annual Percentage Yield (APY)</h3>
            <p className="text-3xl font-bold text-green-600">5.00%</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Next Rebase</h3>
            <p className="text-2xl font-bold">{countdown}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Last Rebase Amount</h3>
            <p className="text-2xl font-bold">+{webSocketData.lastRebaseAmount}%</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Your USDX Balance</h3>
            <p className="text-2xl font-bold">1,000 USDX</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Estimated Next Rebase Gain</h3>
            <p className="text-2xl font-bold text-green-600">
              +{((1000 * Number(webSocketData.lastRebaseAmount)) / 100).toFixed(4)} USDX
            </p>
          </div>
          <Button className="w-full">Buy More USDX</Button>
        </div>
      </CardContent>
    </Card>
  )
}

