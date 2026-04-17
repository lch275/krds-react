/**
 * Dialog 컴포넌트
 * 모달 다이얼로그 - 포커스 트랩, Escape 닫기, 스크롤 잠금
 *
 * 접근성 (ARIA Authoring Practices: Modal Dialog Pattern):
 * - role="dialog" + aria-modal="true"
 * - aria-labelledby: DialogTitle ID 연결 (필수)
 * - aria-describedby: DialogDescription ID 연결 (선택)
 * - 포커스 트랩: Dialog 내부에서만 Tab 순환
 * - Escape 키: Dialog 닫기
 * - 열릴 때: 첫 번째 포커스 가능 요소로 이동
 * - 닫힐 때: 트리거 버튼으로 포커스 복귀
 * - 배경 body 스크롤 잠금
 *
 * Compound 패턴:
 * - Dialog (root, 상태 관리)
 * - DialogTrigger (열기 버튼)
 * - DialogContent (실제 다이얼로그)
 * - DialogTitle (필수)
 * - DialogDescription (선택)
 * - DialogClose (닫기 버튼)
 *
 * 잘못된 사용:
 * - DialogTitle 없이 사용 → 스크린리더가 다이얼로그 목적 파악 불가
 * - 포커스 트랩 없이 사용 → 키보드 사용자가 배경과 상호작용 가능
 */

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'
import { useControllable } from '@/hooks/useControllable'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { lockScroll, unlockScroll } from '@/utils/scroll-lock'

/* ================================================================
   Context
   ================================================================ */

interface DialogContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  titleId: string
  descriptionId: string
}

const DialogContext = createContext<DialogContextValue | null>(null)

function useDialogContext() {
  const ctx = useContext(DialogContext)
  if (!ctx) {
    throw new Error('[KRDS] Dialog 서브컴포넌트는 Dialog 내부에서 사용해야 합니다.')
  }
  return ctx
}

/* ================================================================
   Dialog (Root)
   ================================================================ */

type DialogProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

function Dialog({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: DialogProps) {
  const id = useId()
  const titleId = `dialog-title-${id}`
  const descriptionId = `dialog-desc-${id}`

  const [open, setOpen] = useControllable<boolean>(
    controlledOpen,
    defaultOpen,
    onOpenChange
  )

  return (
    <DialogContext.Provider
      value={{
        open,
        onOpenChange: setOpen,
        titleId,
        descriptionId,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}

/* ================================================================
   DialogTrigger
   ================================================================ */

type DialogTriggerProps = {
  children: ReactNode
  asChild?: boolean
}

function DialogTrigger({ children }: DialogTriggerProps) {
  const { onOpenChange } = useDialogContext()

  return (
    <span
      data-slot="dialog-trigger"
      style={{ display: 'contents' }}
      onClick={() => onOpenChange(true)}
    >
      {children}
    </span>
  )
}

/* ================================================================
   DialogContent
   ================================================================ */

type DialogContentProps = {
  children: ReactNode
  className?: string
  /** 배경 클릭으로 닫기 허용 여부 (기본 true) */
  closeOnOverlayClick?: boolean
  'aria-describedby'?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'role'>

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      children,
      className,
      closeOnOverlayClick = true,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref
  ) => {
    const { open, onOpenChange, titleId, descriptionId } = useDialogContext()
    const contentRef = useRef<HTMLDivElement>(null)

    // 포커스 트랩 활성화
    useFocusTrap(contentRef, open)

    // 스크롤 잠금
    useEffect(() => {
      if (open) {
        lockScroll()
        return () => unlockScroll()
      }
    }, [open])

    // Escape 키 닫기
    useEffect(() => {
      if (!open) return

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.stopPropagation()
          onOpenChange(false)
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [open, onOpenChange])

    // ref 합치기
    const setRefs = useCallback(
      (el: HTMLDivElement | null) => {
        contentRef.current = el
        if (typeof ref === 'function') ref(el)
        else if (ref) ref.current = el
      },
      [ref]
    )

    if (!open) return null

    return createPortal(
      <>
        {/* 배경 오버레이 */}
        <div
          data-slot="dialog-overlay"
          aria-hidden="true"
          className="fixed inset-0 z-modal bg-bg-overlay"
          onClick={closeOnOverlayClick ? () => onOpenChange(false) : undefined}
        />

        {/* 다이얼로그 */}
        <div
          ref={setRefs}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={ariaDescribedBy ?? descriptionId}
          data-slot="dialog-content"
          data-state={open ? 'open' : 'closed'}
          tabIndex={-1}
          className={cn(
            'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'z-modal w-full max-w-lg',
            'bg-bg-default rounded-dialog shadow-modal',
            'focus:outline-none',
            className
          )}
          {...rest}
        >
          {children}
        </div>
      </>,
      document.body
    )
  }
)

DialogContent.displayName = 'DialogContent'

/* ================================================================
   DialogTitle (필수)
   ================================================================ */

type DialogTitleProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'h2'>

function DialogTitle({ children, className, ...rest }: DialogTitleProps) {
  const { titleId } = useDialogContext()

  return (
    <h2
      id={titleId}
      data-slot="dialog-title"
      className={cn('font-semibold text-xl text-text-default', className)}
      {...rest}
    >
      {children}
    </h2>
  )
}

/* ================================================================
   DialogDescription (선택)
   ================================================================ */

type DialogDescriptionProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'p'>

function DialogDescription({ children, className, ...rest }: DialogDescriptionProps) {
  const { descriptionId } = useDialogContext()

  return (
    <p
      id={descriptionId}
      data-slot="dialog-description"
      className={cn('text-sm text-text-subtle', className)}
      {...rest}
    >
      {children}
    </p>
  )
}

/* ================================================================
   DialogHeader / DialogFooter (레이아웃 헬퍼)
   ================================================================ */

function DialogHeader({ className, children, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 p-6 pb-0', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

function DialogBody({ className, children, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="dialog-body"
      className={cn('p-6', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

function DialogFooter({ className, children, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex items-center justify-end gap-2 p-6 pt-0', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

/* ================================================================
   DialogClose
   ================================================================ */

type DialogCloseProps = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'button'>

function DialogClose({ children, className, onClick, ...rest }: DialogCloseProps) {
  const { onOpenChange } = useDialogContext()

  return (
    <button
      type="button"
      data-slot="dialog-close"
      aria-label={!children ? '닫기' : undefined}
      onClick={(e) => {
        onOpenChange(false)
        onClick?.(e)
      }}
      className={cn(
        'rounded focus-visible:outline-none focus-visible:ring-3',
        'focus-visible:ring-border-focus focus-visible:ring-offset-2',
        className
      )}
      {...rest}
    >
      {children ?? (
        <span aria-hidden="true" className="text-xl leading-none">
          ×
        </span>
      )}
    </button>
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogClose,
}
export type {
  DialogProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps,
}
