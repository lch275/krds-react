import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

function TestAccordion() {
  return (
    <Accordion type="multiple" defaultValue={['first']}>
      <AccordionItem value="first">
        <AccordionHeader>
          <AccordionTrigger>First section</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>First content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="second">
        <AccordionHeader>
          <AccordionTrigger>Second section</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Second content</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

describe('Accordion', () => {
  it('renders the default open section', () => {
    render(<TestAccordion />)
    expect(screen.getByText('First content')).toBeVisible()
    expect(screen.getByText('Second content')).not.toBeVisible()
  })

  it('toggles a section when the trigger is clicked', async () => {
    render(<TestAccordion />)
    await userEvent.click(screen.getByRole('button', { name: 'Second section' }))
    expect(screen.getByText('Second content')).toBeVisible()
  })

  it('exposes expanded state and relationships', () => {
    render(<TestAccordion />)
    const trigger = screen.getByRole('button', { name: 'First section' })
    const content = screen.getByText('First content')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(content).toHaveAttribute('aria-labelledby', trigger.id)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<TestAccordion />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
