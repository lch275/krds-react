import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: '오버레이/탭',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Tabs**는 ARIA Tabs 패턴을 기반으로, 키보드 탐색과 패널 연결이 일관되게 동작하는 탭 인터페이스를 제공합니다.

## 구성 예시
\`\`\`tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
\`\`\`

## 키보드 동작
| 키 | 동작 |
| --- | --- |
| 방향키 | 탭 버튼 사이를 이동 |
| Home | 첫 번째 탭으로 이동 |
| End | 마지막 탭으로 이동 |
| Enter / Space | 수동 모드에서 현재 포커스 탭 활성화 |
| Tab | 탭 목록을 하나의 정지점으로 지나감 |

## 활성화 방식
- \`automatic\`: 포커스가 이동하면 즉시 탭이 활성화됩니다.
- \`manual\`: 포커스만 먼저 이동하고 Enter 또는 Space로 활성화합니다.
        `,
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '비제어 사용 시 초기 활성 탭입니다.',
    },
    value: {
      control: 'text',
      description: '제어형 활성 탭 값입니다.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '탭 배치 방향입니다.',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: '탭 활성화 방식입니다.',
      table: { defaultValue: { summary: 'automatic' } },
    },
    className: {
      control: 'text',
      description: '루트 요소에 적용할 추가 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

function ControlledTabsStory() {
  const [value, setValue] = useState('info')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-text-subtle">
        현재 탭: <strong>{value}</strong>
      </p>
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="info">민원 정보</TabsTrigger>
          <TabsTrigger value="history">처리 이력</TabsTrigger>
          <TabsTrigger value="docs">첨부 서류</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="p-4">
          민원 정보 내용
        </TabsContent>
        <TabsContent value="history" className="p-4">
          처리 이력 내용
        </TabsContent>
        <TabsContent value="docs" className="p-4">
          첨부 서류 내용
        </TabsContent>
      </Tabs>
    </div>
  )
}

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="info">민원 정보</TabsTrigger>
        <TabsTrigger value="history">처리 이력</TabsTrigger>
        <TabsTrigger value="docs">첨부 서류</TabsTrigger>
      </TabsList>
      <TabsContent value="info" className="p-4">
        <p className="text-text-default">주요 민원 정보를 확인합니다.</p>
      </TabsContent>
      <TabsContent value="history" className="p-4">
        <p className="text-text-default">처리 일정과 상태 변경 이력을 확인합니다.</p>
      </TabsContent>
      <TabsContent value="docs" className="p-4">
        <p className="text-text-default">제출한 첨부 서류를 확인합니다.</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'info',
    orientation: 'horizontal',
    activationMode: 'automatic',
  },
}

export const Controlled: Story = {
  name: '제어형',
  render: () => <ControlledTabsStory />,
}

export const Vertical: Story = {
  name: '세로 레이아웃',
  render: (args) => (
    <Tabs {...args} className="min-h-48">
      <TabsList>
        <TabsTrigger value="personal">기본 정보</TabsTrigger>
        <TabsTrigger value="contact">연락처</TabsTrigger>
        <TabsTrigger value="address">주소</TabsTrigger>
      </TabsList>
      <TabsContent value="personal" className="flex-1 p-4">
        <p className="text-text-default">기본 정보 패널</p>
      </TabsContent>
      <TabsContent value="contact" className="flex-1 p-4">
        <p className="text-text-default">연락처 정보 패널</p>
      </TabsContent>
      <TabsContent value="address" className="flex-1 p-4">
        <p className="text-text-default">주소 정보 패널</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'personal',
    orientation: 'vertical',
  },
}

export const ManualActivation: Story = {
  name: '수동 활성화',
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">탭 1</TabsTrigger>
        <TabsTrigger value="tab2">탭 2</TabsTrigger>
        <TabsTrigger value="tab3">탭 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4">
        방향키로 포커스만 이동하고, Enter 또는 Space를 눌러야 활성화됩니다.
      </TabsContent>
      <TabsContent value="tab2" className="p-4">
        탭 2 내용
      </TabsContent>
      <TabsContent value="tab3" className="p-4">
        탭 3 내용
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
    activationMode: 'manual',
  },
  parameters: {
    docs: {
      description: {
        story: '탭 전환 시 무거운 렌더링이나 데이터 로딩이 발생한다면 `manual` 모드가 적합합니다.',
      },
    },
  },
}

export const WithDisabledTab: Story = {
  name: '비활성 탭 포함',
  render: () => (
    <Tabs defaultValue="available">
      <TabsList>
        <TabsTrigger value="available">이용 가능</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          준비 중
        </TabsTrigger>
        <TabsTrigger value="other">기타</TabsTrigger>
      </TabsList>
      <TabsContent value="available" className="p-4">
        현재 이용 가능한 서비스 내용입니다.
      </TabsContent>
      <TabsContent value="disabled" className="p-4">
        비활성 탭의 패널은 활성화되면 안 됩니다.
      </TabsContent>
      <TabsContent value="other" className="p-4">
        다른 서비스 관련 내용입니다.
      </TabsContent>
    </Tabs>
  ),
}

export const KeepMounted: Story = {
  name: '패널 유지',
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">탭 1</TabsTrigger>
        <TabsTrigger value="tab2">탭 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" keepMounted className="p-4">
        탭 1 패널은 DOM에 유지된 채 숨김 처리됩니다.
      </TabsContent>
      <TabsContent value="tab2" keepMounted className="p-4">
        숨겨진 패널의 로컬 상태를 유지해야 할 때 `keepMounted`를 사용합니다.
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: '`keepMounted`를 켜면 비활성 패널도 DOM에서 제거되지 않고 유지됩니다.',
      },
    },
  },
}
