import { cn } from '@/utils/cn'

type StepIndicatorItem = {
  label: string
  optional?: boolean
}

type StepIndicatorProps = {
  steps: StepIndicatorItem[]
  currentStep: number
  completedSteps?: number[]
  className?: string
  ariaLabel?: string
}

function StepIndicator({
  steps,
  currentStep,
  completedSteps = [],
  className,
  ariaLabel = 'Step indicator',
}: StepIndicatorProps) {
  return (
    <nav aria-label={ariaLabel} className={cn('w-full', className)}>
      <ol data-slot="step-indicator" className="grid gap-3 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCurrent = stepNumber === currentStep
          const isDone = completedSteps.includes(stepNumber)

          return (
            <li
              key={step.label}
              data-slot="step-indicator-item"
              data-state={isCurrent ? 'current' : isDone ? 'done' : 'upcoming'}
              aria-current={isCurrent ? 'step' : undefined}
              className={cn(
                'flex items-start gap-3 rounded-card border px-4 py-3',
                isCurrent && 'border-primary bg-primary-subtle',
                isDone && 'border-border-default bg-bg-subtle',
                !isCurrent && !isDone && 'border-border-default bg-bg-default'
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold',
                  isCurrent && 'border-primary bg-primary text-text-on-primary',
                  isDone && 'border-border-strong bg-bg-default text-text-default',
                  !isCurrent && !isDone && 'border-border-default text-text-subtle'
                )}
              >
                {isDone ? 'v' : stepNumber}
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-text-muted">
                  Step {stepNumber}
                  {step.optional ? ' · Optional' : ''}
                </span>
                <span className="block font-medium text-text-default">{step.label}</span>
              </span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { StepIndicator }
export type { StepIndicatorProps, StepIndicatorItem }
