// components/ui/toast.tsx

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ✅ Toast styling variants
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        success: "bg-green-600 text-white",
        error: "bg-red-600 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// ✅ Toast props (no title/description here to avoid type conflict)
export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
  )
);
Toast.displayName = "Toast";

// ✅ Container for rendering all toasts
export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed z-[9999] flex flex-col gap-2 bottom-4 right-4 max-w-sm">
      {children}
    </div>
  );
}

// ✅ Placeholder for viewport logic (optional enhancements)
export function ToastViewport() {
  return null;
}

// ✅ Custom action button (e.g., Undo)
export const ToastActionElement = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="ml-4 text-sm font-medium text-blue-500 hover:underline"
  >
    {label}
  </button>
);
