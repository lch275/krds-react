import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders as a decorative loading placeholder', () => {
    render(<Skeleton className="h-4 w-20" />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})
