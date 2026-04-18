import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: '인터페이스/입력/스위치',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Switch**는 즉시 적용되는 켜기/끄기 설정에 적합한 토글 컴포넌트입니다. 선택 항목 집합에 쓰는 체크박스와는 용도가 다릅니다.

## 체크박스와의 차이
| 패턴 | Checkbox | Switch |
| --- | --- | --- |
| 적합한 용도 | 목록 내 선택 | 즉시 반영되는 설정 토글 |
| 인식 방식 | 포함/제외 | 켜기/끄기 |
| ARIA role | checkbox | switch |

## 접근성 메모
- 단독으로 사용할 때는 접근 가능한 이름을 제공해야 합니다.
- 현재 켜짐/꺼짐 상태를 보조 기술에 노출합니다.
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '제어형 상태입니다.',
    },
    defaultChecked: {
      control: 'boolean',
      description: '초기 비제어 상태입니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태입니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: '보이는 레이블 텍스트입니다.',
    },
    'aria-label': {
      control: 'text',
      description: '레이블이 없을 때 사용할 접근성 이름입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    children: '알림 받기',
    defaultChecked: false,
  },
}

export const Controlled: Story = {
  name: '제어형',
  render: () => {
    const isChecked = true

    return <Switch checked={isChecked}>서비스 이용 동의</Switch>
  },
}

export const WithoutLabel: Story = {
  name: '보이는 레이블 없음',
  args: {
    'aria-label': '알림 받기',
    defaultChecked: false,
  },
  parameters: {
    docs: {
      description: {
        story: '보이는 레이블이 없다면 `aria-label`로 접근 가능한 이름을 반드시 제공합니다.',
      },
    },
  },
}

export const SettingsList: Story = {
  name: '설정 목록',
  render: () => (
    <div className="flex max-w-sm flex-col divide-y divide-border-default">
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-medium text-text-default">이메일 알림</p>
          <p className="text-xs text-text-subtle">안내 사항을 이메일로 받습니다.</p>
        </div>
        <Switch aria-label="이메일 알림" defaultChecked />
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-medium text-text-default">문자 알림</p>
          <p className="text-xs text-text-subtle">긴급 공지를 문자로 받습니다.</p>
        </div>
        <Switch aria-label="문자 알림" defaultChecked={false} />
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-medium text-text-default">혜택 안내</p>
          <p className="text-xs text-text-subtle">이벤트와 혜택 소식을 받습니다.</p>
        </div>
        <Switch aria-label="혜택 안내" defaultChecked={false} disabled />
      </div>
    </div>
  ),
}

export const States: Story = {
  name: '상태 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch defaultChecked={false}>꺼짐</Switch>
      <Switch defaultChecked>켜짐</Switch>
      <Switch defaultChecked={false} disabled>
        비활성(꺼짐)
      </Switch>
      <Switch defaultChecked disabled>
        비활성(켜짐)
      </Switch>
    </div>
  ),
}
