import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function StakingInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staking Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Current APY</h3>
            <p className="text-3xl font-bold text-green-600">5.00%</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Staked</h3>
            <p className="text-2xl font-bold">$750,000,000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Your Stake</h3>
            <p className="text-2xl font-bold">$10,000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Earned Rewards</h3>
            <p className="text-2xl font-bold text-green-600">$500</p>
          </div>
          <Button className="w-full">Stake More</Button>
        </div>
      </CardContent>
    </Card>
  )
}

