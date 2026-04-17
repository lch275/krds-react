import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Overlays/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['first']}>
      <AccordionItem value="first">
        <AccordionHeader>
          <AccordionTrigger>Usage guidelines</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Keep headings short and group related information into focused sections.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="second">
        <AccordionHeader>
          <AccordionTrigger>Accessibility</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Expose heading structure, button semantics, and expanded states to assistive tech.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
