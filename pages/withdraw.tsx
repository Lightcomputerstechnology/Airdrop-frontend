// pages/withdraw.tsx

import { useState } from "react";

export default function WithdrawPage() {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Manual withdrawal request sent:\n${amount} to ${wallet}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏦 Withdraw Airdrop Earnings</h1>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Wallet Address</label>
          <input
            className="w-full p-2 border rounded"
            placeholder="0x..."
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          📨 Request Withdraw
        </button>
      </form>
    </div>
  );
}
