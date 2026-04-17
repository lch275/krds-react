import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { cva, type VariantProps } from '@/utils/cva'

const spinnerVariants = cva(
  ['inline-block animate-spin motion-reduce:animate-none'],
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-10 w-10',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

type SpinnerProps = {
  label?: string
  className?: string
} &
  VariantProps<typeof spinnerVariants> &
  ({ 'aria-hidden': true } | { 'aria-hidden'?: false; label?: string })

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size, label = 'Loading', className, 'aria-hidden': ariaHidden, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        data-slot="spinner"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role={ariaHidden ? undefined : 'img'}
        aria-label={ariaHidden ? undefined : label}
        aria-hidden={ariaHidden}
        className={cn('shrink-0', spinnerVariants({ size }), className)}
        {...rest}
      >
        {/* 배경 트랙 (흐린 원) */}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2.5"
          className="opacity-20"
        />
        {/* 스피너 호 (약 75% 원호) */}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="47 16"
          strokeDashoffset="0"
        />
      </svg>
    )
  }
)

Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }
export type { SpinnerProps }
