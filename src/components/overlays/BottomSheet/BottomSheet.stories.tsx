import type { Meta, StoryObj } from '@storybook/react'
import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from './BottomSheet'
import { Button } from '@/components/ui/Button/Button'

const meta: Meta<typeof BottomSheet> = {
  title: '오버레이/바텀시트',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**BottomSheet**는 모바일 환경에서 선택이나 확인 작업을 집중해서 처리할 수 있게 도와주는 하단 시트 패턴입니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof BottomSheet>

export const Default: Story = {
  render: () => (
    <BottomSheet>
      <BottomSheetTrigger>
        <Button>하단 시트 열기</Button>
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>연락 수단 선택</BottomSheetTitle>
          <BottomSheetDescription>
            모바일에서 짧은 선택 작업을 처리할 때 적합합니다.
          </BottomSheetDescription>
        </BottomSheetHeader>
        <BottomSheetBody>
          <div className="grid gap-2">
            <Button variant="secondary">전화 상담</Button>
            <Button variant="secondary">이메일 회신</Button>
          </div>
        </BottomSheetBody>
        <BottomSheetFooter>
          <BottomSheetClose>
            <Button variant="ghost">닫기</Button>
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  ),
}
