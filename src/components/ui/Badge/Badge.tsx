/**
 * Badge 컴포넌트
 * 상태/카테고리 표시용 작은 레이블
 *
 * 접근성:
 * - 색상만으로 상태를 전달하면 안 됨 → 텍스트나 아이콘 병행
 * - 중요 상태 변경 시 aria-live 영역에 공지
 * - 카운트 배지: aria-label로 맥락 제공 ("새 알림 3개")
 */

import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'
import { cva, type VariantProps } from '@/utils/cva'

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1',
    'rounded-badge border px-2.5 py-0.5',
    'text-xs font-medium',
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        default:  'bg-bg-subtle text-text-default border-border-default',
        primary:  'bg-primary-subtle text-primary border-primary/20',
        success:  'bg-status-success-subtle text-status-success border-status-success/20',
        warning:  'bg-status-warning-subtle text-status-warning border-status-warning/20',
        error:    'bg-status-error-subtle text-status-error border-status-error/20',
        info:     'bg-status-info-subtle text-status-info border-status-info/20',
        solid:    'bg-primary text-text-on-primary border-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type BadgeProps = {
  className?: string
} & VariantProps<typeof badgeVariants> &
  ComponentPropsWithoutRef<'span'>

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, children, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        data-slot="badge"
        className={cn(badgeVariants({ variant }), className)}
        {...rest}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
export type { BadgeProps }
