import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: '인터페이스/알림',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Alert**는 사용자에게 중요한 안내, 경고, 오류 정보를 문맥 안에서 분명하게 전달하는 컴포넌트입니다.

## 라이브 리전 매핑
| live 값 | role | 사용 상황 |
| --- | --- | --- |
| \`off\` | \`region\` | 페이지 흐름 안의 정적 안내 |
| \`polite\` | \`status\` | 방해하지 않고 가능한 시점에 읽어 주는 안내 |
| \`assertive\` | \`alert\` | 즉시 알려야 하는 긴급 오류나 경고 |

## 접근성 메모
- 의미를 색상만으로 전달하지 않습니다.
- 라이브 리전은 동적으로 나타나는 알림에만 사용합니다.
- 제목과 본문은 짧고 분명하게 유지합니다.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: '알림 스타일입니다.',
      table: { defaultValue: { summary: 'info' } },
    },
    title: {
      control: 'text',
      description: '알림 제목입니다.',
    },
    children: {
      control: 'text',
      description: '선택적인 본문 내용입니다.',
    },
    live: {
      control: 'select',
      options: ['off', 'polite', 'assertive'],
      description: 'ARIA live region 동작 방식입니다.',
      table: { defaultValue: { summary: 'off' } },
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'info',
    title: '안내 메시지',
    children: '신청 전에 입력한 내용을 한 번 더 확인해 주세요.',
  },
}

export const TitleOnly: Story = {
  args: {
    variant: 'info',
    title: '제목만 있는 알림',
  },
}

export const LivePolite: Story = {
  name: '완만한 라이브 알림',
  args: {
    variant: 'success',
    title: '저장이 완료되었습니다',
    children: '변경한 내용이 저장되었습니다.',
    live: 'polite',
  },
  parameters: {
    docs: {
      description: {
        story: '현재 작업을 방해하지 않으면서도 안내가 필요한 경우 `polite`를 사용합니다.',
      },
    },
  },
}

export const LiveAssertive: Story = {
  name: '즉시 읽는 라이브 알림',
  args: {
    variant: 'error',
    title: '세션이 만료되었습니다',
    children: '보안을 위해 로그아웃되었습니다. 다시 로그인해 주세요.',
    live: 'assertive',
  },
  parameters: {
    docs: {
      description: {
        story: '즉시 알려야 하는 긴급 오류에만 `assertive`를 제한적으로 사용합니다.',
      },
    },
  },
}

export const Variants: Story = {
  name: '변형 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info" title="안내">
        일반적인 서비스 안내 메시지입니다.
      </Alert>
      <Alert variant="success" title="완료">
        작업이 정상적으로 완료되었습니다.
      </Alert>
      <Alert variant="warning" title="주의">
        제출 전에 내용을 다시 확인하는 것이 좋습니다.
      </Alert>
      <Alert variant="error" title="오류">
        진행을 막는 문제가 발생했습니다.
      </Alert>
    </div>
  ),
}
