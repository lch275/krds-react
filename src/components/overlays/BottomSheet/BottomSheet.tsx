import {
  createContext,
  useContext,
  useEffect,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'
import { useControllable } from '@/hooks/useControllable'
import { lockScroll, unlockScroll } from '@/utils/scroll-lock'

interface BottomSheetContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  titleId: string
  descriptionId: string
}

const BottomSheetContext = createContext<BottomSheetContextValue | null>(null)

function useBottomSheetContext() {
  const context = useContext(BottomSheetContext)
  if (!context) {
    throw new Error('[KRDS] BottomSheet components must be used inside BottomSheet.')
  }
  return context
}

type BottomSheetProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

function BottomSheet({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: BottomSheetProps) {
  const id = useId()
  const [open, setOpen] = useControllable<boolean>(controlledOpen, defaultOpen, onOpenChange)

  return (
    <BottomSheetContext.Provider
      value={{
        open,
        onOpenChange: setOpen,
        titleId: `bottom-sheet-title-${id}`,
        descriptionId: `bottom-sheet-description-${id}`,
      }}
    >
      {children}
    </BottomSheetContext.Provider>
  )
}

type BottomSheetTriggerProps = {
  children: ReactNode
}

function BottomSheetTrigger({ children }: BottomSheetTriggerProps) {
  const { onOpenChange } = useBottomSheetContext()

  return (
    <span data-slot="bottom-sheet-trigger" style={{ display: 'contents' }} onClick={() => onOpenChange(true)}>
      {children}
    </span>
  )
}

type BottomSheetContentProps = {
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'role'>

function BottomSheetContent({ children, className, ...rest }: BottomSheetContentProps) {
  const { open, onOpenChange, titleId, descriptionId } = useBottomSheetContext()

  useEffect(() => {
    if (!open) {
      return
    }

    lockScroll()
    return () => unlockScroll()
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onOpenChange, open])

  if (!open) {
    return null
  }

  return createPortal(
    <>
      <div
        aria-hidden="true"
        data-slot="bottom-sheet-overlay"
        className="fixed inset-0 z-overlay bg-bg-overlay"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        data-slot="bottom-sheet-content"
        className={cn(
          'fixed inset-x-0 bottom-0 z-modal rounded-t-[1.5rem] bg-bg-default shadow-modal',
          className
        )}
        {...rest}
      >
        <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-border-default" aria-hidden="true" />
        {children}
      </div>
    </>,
    document.body
  )
}

function BottomSheetHeader({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return <div data-slot="bottom-sheet-header" className={cn('space-y-2 px-6 pb-2 pt-4', className)} {...rest} />
}

function BottomSheetTitle({ className, ...rest }: ComponentPropsWithoutRef<'h2'>) {
  const { titleId } = useBottomSheetContext()
  return <h2 id={titleId} data-slot="bottom-sheet-title" className={cn('text-lg font-semibold text-text-default', className)} {...rest} />
}

function BottomSheetDescription({ className, ...rest }: ComponentPropsWithoutRef<'p'>) {
  const { descriptionId } = useBottomSheetContext()
  return <p id={descriptionId} data-slot="bottom-sheet-description" className={cn('text-sm text-text-subtle', className)} {...rest} />
}

function BottomSheetBody({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return <div data-slot="bottom-sheet-body" className={cn('max-h-[70vh] overflow-y-auto px-6 py-4', className)} {...rest} />
}

function BottomSheetFooter({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return <div data-slot="bottom-sheet-footer" className={cn('flex items-center justify-end gap-2 px-6 pb-6 pt-2', className)} {...rest} />
}

function BottomSheetClose({ className, onClick, ...rest }: ComponentPropsWithoutRef<'button'>) {
  const { onOpenChange } = useBottomSheetContext()
  return (
    <button
      type="button"
      data-slot="bottom-sheet-close"
      className={cn('rounded-control px-3 py-2', className)}
      onClick={(event) => {
        onOpenChange(false)
        onClick?.(event)
      }}
      {...rest}
    />
  )
}

export {
  BottomSheet,
  BottomSheetTrigger,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetDescription,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetClose,
}
export type {
  BottomSheetProps,
  BottomSheetContentProps,
  BottomSheetTriggerProps,
}
