// pages/wallet.tsx

export default function WalletPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">💼 Wallet & Earnings</h1>
      <div className="grid gap-4">
        <div className="p-4 border rounded shadow bg-background">
          <h2 className="font-semibold text-lg">🪙 Total Claimed Airdrops</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>

        <div className="p-4 border rounded shadow bg-background">
          <h2 className="font-semibold text-lg">🔗 Connected Wallets</h2>
          <ul className="list-disc pl-5">
            <li className="text-muted">0x...abc123 (ETH)</li>
            <li className="text-muted">0x...def456 (BNB)</li>
          </ul>
        </div>

        <div className="p-4 border rounded shadow bg-background">
          <h2 className="font-semibold text-lg">⚙️ Wallet Settings (coming soon)</h2>
          <p className="text-muted">Import new wallets, switch chains, manage tokens...</p>
        </div>
      </div>
    </div>
  );
}
