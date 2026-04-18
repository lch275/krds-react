import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: '오버레이/아코디언',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Accordion**은 접고 펼칠 수 있는 여러 정보 구간을 세로로 정리해 보여 주는 패턴입니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['first']}>
      <AccordionItem value="first">
        <AccordionHeader>
          <AccordionTrigger>이용 안내</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          제목은 짧게 유지하고, 관련 정보는 주제별로 묶어 제공합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="second">
        <AccordionHeader>
          <AccordionTrigger>접근성</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          제목 구조, 버튼 의미, 확장 상태가 보조 기술에 전달되어야 합니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
