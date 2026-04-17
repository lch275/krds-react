/**
 * Class Variance Authority (CVA) 래퍼
 * 컴포넌트 변형(variant) 관리를 위한 유틸리티
 *
 * @example
 * const buttonVariants = cva('base-class', {
 *   variants: {
 *     variant: { primary: 'bg-primary', secondary: 'bg-transparent' },
 *     size: { sm: 'h-8', md: 'h-10', lg: 'h-11' },
 *   },
 *   defaultVariants: { variant: 'primary', size: 'md' },
 * })
 *
 * // Props 타입 추론:
 * type ButtonVariantProps = VariantProps<typeof buttonVariants>
 */

export { cva, cx, type VariantProps } from 'class-variance-authority'
