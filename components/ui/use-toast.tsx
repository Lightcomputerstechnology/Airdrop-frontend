// components/ui/use-toast.tsx

import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<any[]>([]);

  const toast = ({ title, description }: { title: string; description?: string }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
    alert(`${title}\n${description}`); // ✅ simple fallback — replace with UI if needed
  };

  return { toast };
}
