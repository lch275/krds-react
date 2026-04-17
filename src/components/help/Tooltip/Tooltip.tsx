import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type MutableRefObject,
  type ReactElement,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

interface TooltipContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.MutableRefObject<HTMLElement | null>
  contentId: string
}

const TooltipContext = createContext<TooltipContextValue | null>(null)

function useTooltipContext() {
  const context = useContext(TooltipContext)
  if (!context) {
    throw new Error('[KRDS] Tooltip components must be used inside Tooltip.')
  }
  return context
}

type TooltipProps = {
  children: ReactNode
  defaultOpen?: boolean
}

function Tooltip({ children, defaultOpen = false }: TooltipProps) {
  const [open, setOpen] = useState(defaultOpen)
  const triggerRef = useRef<HTMLElement | null>(null)
  const contentId = `tooltip-${useId()}`

  return (
    <TooltipContext.Provider value={{ open, setOpen, triggerRef, contentId }}>
      {children}
    </TooltipContext.Provider>
  )
}

type TooltipTriggerProps = {
  children: ReactElement
}

function TooltipTrigger({ children }: TooltipTriggerProps) {
  const { open, setOpen, triggerRef, contentId } = useTooltipContext()

  const enhancedChild = cloneElement(children, {
    'aria-describedby': open ? contentId : undefined,
  })

  return (
    <span
      ref={triggerRef as MutableRefObject<HTMLSpanElement | null>}
      data-slot="tooltip-trigger"
      className="inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      {enhancedChild}
    </span>
  )
}

type TooltipContentProps = {
  children: ReactNode
  className?: string
}

function TooltipContent({ children, className }: TooltipContentProps) {
  const { open, setOpen, triggerRef, contentId } = useTooltipContext()
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (!open || !triggerRef.current) {
      return
    }

    const rect = triggerRef.current.getBoundingClientRect()
    setPosition({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX,
    })
  }, [open, triggerRef])

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current
          ?.querySelector<HTMLElement>('button,a,[href],[tabindex]:not([tabindex="-1"])')
          ?.focus()
      }
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (!contentRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [open, setOpen, triggerRef])

  if (!open) {
    return null
  }

  return createPortal(
    <div
      ref={contentRef}
      id={contentId}
      role="tooltip"
      data-slot="tooltip-content"
      className={cn(
        'z-toast max-w-xs rounded-card border border-border-strong bg-bg-inverse px-3 py-2 text-sm text-text-inverse shadow-dropdown',
        className
      )}
      style={{ position: 'absolute', top: position.top, left: position.left }}
    >
      {children}
    </div>,
    document.body
  )
}

export { Tooltip, TooltipTrigger, TooltipContent }
export type { TooltipProps, TooltipTriggerProps, TooltipContentProps }
