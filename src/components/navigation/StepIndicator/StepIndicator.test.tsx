import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders an ordered list with current step state', () => {
    render(
      <StepIndicator
        currentStep={2}
        completedSteps={[1]}
        steps={[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]}
      />
    )

    expect(screen.getByRole('navigation', { name: 'Step indicator' })).toBeInTheDocument()
    expect(screen.getByText('Two').closest('li')).toHaveAttribute('aria-current', 'step')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <StepIndicator
        currentStep={2}
        completedSteps={[1]}
        steps={[{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
