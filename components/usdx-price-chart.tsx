"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useWebSocket } from "../hooks/useWebSocket"
import { Button } from "@/components/ui/button"

type TimeFrame = "24h" | "7d" | "30d"

export function USDXPriceChart() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("24h")
  const webSocketData = useWebSocket()

  const formatDate = (dateString: string, frame: TimeFrame) => {
    const date = new Date(dateString)
    switch (frame) {
      case "24h":
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      case "7d":
        return date.toLocaleDateString([], { month: "short", day: "numeric" })
      case "30d":
        return date.toLocaleDateString([], { month: "short", day: "numeric" })
    }
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>USDX Price Chart</CardTitle>
          <div className="space-x-2">
            <Button variant={timeFrame === "24h" ? "default" : "outline"} onClick={() => setTimeFrame("24h")}>
              24h
            </Button>
            <Button variant={timeFrame === "7d" ? "default" : "outline"} onClick={() => setTimeFrame("7d")}>
              7d
            </Button>
            <Button variant={timeFrame === "30d" ? "default" : "outline"} onClick={() => setTimeFrame("30d")}>
              30d
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            price: {
              label: "Price",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={webSocketData.priceHistory[timeFrame]} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <XAxis
                dataKey="time"
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => formatDate(value, timeFrame)}
                interval={timeFrame === "24h" ? 23 : "preserveStartEnd"}
              />
              <YAxis
                domain={["dataMin", "dataMax"]}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => Number(value).toFixed(6)}
                tickCount={5}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                labelFormatter={(label) => formatDate(label as string, timeFrame)}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="var(--color-price)"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

