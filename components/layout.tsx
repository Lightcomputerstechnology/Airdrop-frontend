// components/layout.tsx

import "@/styles/globals.css"; // ✅ Fix added here
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 border-b">
        <nav className="flex gap-4">
          <Link href="/" className={cn("hover:underline")}>Dashboard</Link>
          <Link href="/airdrops" className={cn("hover:underline")}>Airdrops</Link>
          <Link href="/wallet" className={cn("hover:underline")}>Wallet</Link>
          <Link href="/withdraw" className={cn("hover:underline")}>Withdraw</Link>
          <Link href="/ai" className={cn("hover:underline")}>AI</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}