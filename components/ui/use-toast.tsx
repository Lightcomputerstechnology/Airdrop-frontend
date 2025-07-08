// components/ui/use-toast.tsx

import * as React from "react";
import { ToastActionElement, type ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number; // ✅ Added to fix TypeScript error
};

const toastQueue: ToasterToast[] = [];
const listeners: ((toast: ToasterToast) => void)[] = [];

function sendToast(toast: ToasterToast) {
  if (listeners.length === 0) {
    toastQueue.push(toast);
  } else {
    listeners.forEach((listener) => listener(toast));
  }
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  React.useEffect(() => {
    function handleToast(toast: ToasterToast) {
      setToasts((prev) => [...prev.slice(-TOAST_LIMIT + 1), toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, (toast.duration || 3000) + TOAST_REMOVE_DELAY);
    }

    listeners.push(handleToast);
    toastQueue.splice(0, toastQueue.length).forEach(handleToast);

    return () => {
      const index = listeners.indexOf(handleToast);
      if (index !== -1) listeners.splice(index, 1);
    };
  }, []);

  function toast({
    title,
    description,
    duration,
  }: {
    title: string;
    description?: string;
    duration?: number;
  }) {
    const id = Math.random().toString(36).substr(2, 9);
    sendToast({ id, title, description, duration });
  }

  return { toast, toasts };
  }
