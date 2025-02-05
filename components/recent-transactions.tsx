import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  { id: 1, type: "Buy", amount: 100, date: "2023-06-01" },
  { id: 2, type: "Sell", amount: 50, date: "2023-05-30" },
  { id: 3, type: "Rebase", amount: 0.25, date: "2023-05-29" },
  { id: 4, type: "Rebase", amount: 0.24, date: "2023-05-28" },
  { id: 5, type: "Buy", amount: 150, date: "2023-05-27" },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Amount (USDX)</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>
                  {transaction.type === "Rebase" ? `+${transaction.amount.toFixed(4)}` : transaction.amount}
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

