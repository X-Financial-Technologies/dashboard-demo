import Link from "next/link"
import { Home, PieChart, RefreshCw, BarChart2, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-full shadow-lg">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-bold text-black-600">FTX</h1>
      </div>
      <nav className="mt-6">
        <Link href="/" className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200">
          <Home className="mr-3" />
          <span>Dashboard</span>
        </Link>
        <Link href="/analytics" className="flex items-center mt-5 py-2 px-8 text-gray-700 hover:bg-gray-200">
          <PieChart className="mr-3" />
          <span>Analytics</span>
        </Link>
        <Link href="/rebasing" className="flex items-center mt-5 py-2 px-8 text-gray-700 hover:bg-gray-200">
          <RefreshCw className="mr-3" />
          <span>Rebasing</span>
        </Link>
        <Link href="/transactions" className="flex items-center mt-5 py-2 px-8 text-gray-700 hover:bg-gray-200">
          <BarChart2 className="mr-3" />
          <span>Transactions</span>
        </Link>
        <Link href="/settings" className="flex items-center mt-5 py-2 px-8 text-gray-700 hover:bg-gray-200">
          <Settings className="mr-3" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}

