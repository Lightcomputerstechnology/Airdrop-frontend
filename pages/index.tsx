// pages/index.tsx

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4">🪂 Airdrop Automation Dashboard</h1>
      <ul className="grid gap-4">
        <li>
          <Link href="/ai" className="text-blue-600 hover:underline">
            🤖 AI Command Panel
          </Link>
        </li>
        <li>
          <Link href="/airdrops" className="text-blue-600 hover:underline">
            📋 View Live Airdrops
          </Link>
        </li>
        <li>
          <Link href="/wallet" className="text-blue-600 hover:underline">
            💼 Wallet & Earnings
          </Link>
        </li>
        <li>
          <Link href="/withdraw" className="text-blue-600 hover:underline">
            🏦 Manual Withdraw
          </Link>
        </li>
      </ul>
    </main>
  );
}
