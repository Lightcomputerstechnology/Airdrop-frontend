// app/layout.tsx

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";

export default function AppRoot({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}
