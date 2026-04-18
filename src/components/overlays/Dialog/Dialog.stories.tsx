import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'
import { Button } from '@/components/ui/Button/Button'
import { Field, FieldLabel } from '@/components/ui/Field/Field'
import { Input } from '@/components/ui/inputs/Input/Input'

const meta: Meta<typeof Dialog> = {
  title: '오버레이/대화상자',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Dialog**는 포커스 관리, Escape 처리, 제목/설명 연결을 포함한 모달 대화상자 패턴을 제공합니다.

## 구성 예시
\`\`\`tsx
<Dialog>
  <DialogTrigger><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogClose />
    </DialogHeader>
    <DialogBody>Body content</DialogBody>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`

## 접근성 메모
- \`role="dialog"\`, \`aria-modal="true"\`를 사용합니다.
- \`DialogTitle\`을 \`aria-labelledby\`로 연결합니다.
- 열린 동안 포커스를 다이얼로그 내부에 유지합니다.
- 기본적으로 Escape 키로 닫을 수 있습니다.
- 닫힌 뒤에는 트리거로 포커스를 되돌립니다.
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: '제어형 열림 상태입니다.',
    },
    defaultOpen: {
      control: 'boolean',
      description: '초기 비제어 열림 상태입니다.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

function ControlledDialogStory() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>열기</Button>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          닫기
        </Button>
      </div>
      <p className="text-sm text-text-subtle">상태: {open ? '열림' : '닫힘'}</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>제어형 대화상자</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              외부 React 상태값으로 열림 여부를 제어하는 예시입니다.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger>
        <Button>대화상자 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>작업 확인</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            계속 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.
          </DialogDescription>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">취소</Button>
          </DialogClose>
          <Button variant="primary">확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  args: {
    defaultOpen: false,
  },
}

export const Controlled: Story = {
  name: '제어형',
  render: () => <ControlledDialogStory />,
}

export const DeleteConfirm: Story = {
  name: '삭제 확인',
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button variant="danger">민원 삭제</Button>
      </DialogTrigger>
      <DialogContent closeOnOverlayClick={false}>
        <DialogHeader>
          <DialogTitle>민원 삭제</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            민원 번호 &apos;2024-KR-001234&apos;를 삭제하시겠습니까?
          </DialogDescription>
          <p className="mt-2 text-sm text-status-error">
            삭제한 민원은 복구할 수 없습니다.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">취소</Button>
          </DialogClose>
          <Button variant="danger">삭제</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: '실수로 닫히면 안 되는 확인 대화상자에는 `closeOnOverlayClick={false}`를 사용합니다.',
      },
    },
  },
}

export const FormDialog: Story = {
  name: '폼 대화상자',
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>민원 수정</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>민원 정보 수정</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Field required>
              <FieldLabel>이름</FieldLabel>
              <Input defaultValue="Kim Minjun" />
            </Field>
            <Field required>
              <FieldLabel>연락처</FieldLabel>
              <Input type="tel" defaultValue="010-1234-5678" />
            </Field>
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">취소</Button>
          </DialogClose>
          <Button variant="primary">저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LongContent: Story = {
  name: '긴 내용',
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>개인정보 처리방침 열기</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>개인정보 처리방침</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <DialogDescription>이 방침은 2024년 1월 1일부터 적용됩니다.</DialogDescription>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-text-default">항목 {index + 1}</h3>
              <p className="mt-1 text-sm text-text-subtle">
                수집하는 개인정보 항목, 처리 목적, 보관 기간에 대한 안내 예시 문구입니다.
              </p>
            </div>
          ))}
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">닫기</Button>
          </DialogClose>
          <Button variant="primary">동의</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
