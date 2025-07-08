// components/ui/use-toast.tsx

"use client"

import * as React from "react"
import type { ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 3000

export interface ToasterToast extends ToastProps {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode // Accepts JSX like <ToastActionElement />
}

type ToastFn = (options: {
  title: React.ReactNode
  description?: React.ReactNode
  variant?: ToastProps["variant"]
  action?: React.ReactNode
}) => void

const toastQueue: ToasterToast[] = []
const listeners: React.Dispatch<React.SetStateAction<ToasterToast[]>>[] = []

function notify(toast: ToasterToast) {
  toastQueue.unshift(toast)
  if (toastQueue.length > TOAST_LIMIT) toastQueue.pop()
  listeners.forEach(fn => fn([...toastQueue]))

  // Auto-remove after delay
  setTimeout(() => {
    const idx = toastQueue.findIndex(t => t.id === toast.id)
    if (idx > -1) toastQueue.splice(idx, 1)
    listeners.forEach(fn => fn([...toastQueue]))
  }, TOAST_REMOVE_DELAY)
}

export function useToast(): { toasts: ToasterToast[]; toast: ToastFn } {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([])

  React.useEffect(() => {
    listeners.push(setToasts)
    return () => {
      const index = listeners.indexOf(setToasts)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  const toast: ToastFn = ({ title, description, variant = "default", action }) => {
    notify({
      id: Math.random().toString(36).substring(2),
      title,
      description,
      variant,
      action,
      className: "", // Optional, can be customized
    })
  }

  return { toasts, toast }
      }
