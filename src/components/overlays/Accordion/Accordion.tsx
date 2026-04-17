import {
  createContext,
  useContext,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { cn } from '@/utils/cn'
import { useControllable } from '@/hooks/useControllable'

type AccordionType = 'single' | 'multiple'

interface AccordionContextValue {
  type: AccordionType
  value: string[]
  onValueChange: (nextValue: string[]) => void
}

interface AccordionItemContextValue {
  value: string
  isOpen: boolean
  triggerId: string
  contentId: string
}

const AccordionContext = createContext<AccordionContextValue | null>(null)
const AccordionItemContext = createContext<AccordionItemContextValue | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('[KRDS] Accordion components must be used inside Accordion.')
  }
  return context
}

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error('[KRDS] Accordion item components must be used inside AccordionItem.')
  }
  return context
}

type AccordionProps = {
  type?: AccordionType
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: ReactNode
  className?: string
}

function toArray(value: string | string[] | undefined, type: AccordionType) {
  if (value === undefined) {
    return []
  }

  if (Array.isArray(value)) {
    return type === 'single' ? value.slice(0, 1) : value
  }

  return value ? [value] : []
}

function Accordion({
  type = 'single',
  value,
  defaultValue,
  onValueChange,
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useControllable<string[]>(
    value === undefined ? undefined : toArray(value, type),
    toArray(defaultValue, type),
    (nextValue) => {
      if (!onValueChange) {
        return
      }

      onValueChange(type === 'single' ? nextValue[0] ?? '' : nextValue)
    }
  )

  return (
    <AccordionContext.Provider
      value={{
        type,
        value: openItems,
        onValueChange: setOpenItems,
      }}
    >
      <div data-slot="accordion" className={cn('space-y-3', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

type AccordionItemProps = {
  value: string
  children: ReactNode
  className?: string
}

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const root = useAccordionContext()
  const id = useId()
  const isOpen = root.value.includes(value)

  return (
    <AccordionItemContext.Provider
      value={{
        value,
        isOpen,
        triggerId: `accordion-trigger-${id}`,
        contentId: `accordion-content-${id}`,
      }}
    >
      <div
        data-slot="accordion-item"
        data-state={isOpen ? 'open' : 'closed'}
        className={cn('overflow-hidden rounded-card border border-border-default', className)}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

function AccordionHeader({ className, ...rest }: ComponentPropsWithoutRef<'h3'>) {
  return <h3 data-slot="accordion-header" className={cn('m-0', className)} {...rest} />
}

function AccordionTrigger({
  className,
  children,
  onClick,
  ...rest
}: ComponentPropsWithoutRef<'button'>) {
  const root = useAccordionContext()
  const item = useAccordionItemContext()

  return (
    <button
      type="button"
      id={item.triggerId}
      aria-expanded={item.isOpen}
      aria-controls={item.contentId}
      data-slot="accordion-trigger"
      data-state={item.isOpen ? 'open' : 'closed'}
      onClick={(event) => {
        const nextValue =
          root.type === 'single'
            ? item.isOpen
              ? []
              : [item.value]
            : item.isOpen
              ? root.value.filter((entry) => entry !== item.value)
              : [...root.value, item.value]

        root.onValueChange(nextValue)
        onClick?.(event)
      }}
      className={cn(
        'flex w-full items-center justify-between gap-4 px-4 py-4 text-left',
        'bg-bg-default text-text-default transition-colors hover:bg-bg-subtle',
        'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-inset',
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-text-subtle">
        {item.isOpen ? '-' : '+'}
      </span>
    </button>
  )
}

function AccordionContent({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<'div'>) {
  const item = useAccordionItemContext()

  return (
    <div
      id={item.contentId}
      role="region"
      aria-labelledby={item.triggerId}
      hidden={!item.isOpen}
      data-slot="accordion-content"
      className={cn('border-t border-border-default px-4 py-4 text-sm text-text-subtle', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
}
export type { AccordionProps, AccordionItemProps, AccordionType }
