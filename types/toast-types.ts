// types/toast-types.ts

import type { VariantProps } from "class-variance-authority";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<any> {
  variant?: "default" | "success" | "error"
}
