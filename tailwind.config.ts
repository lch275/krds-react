import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // Tailwind CSS v4에서는 theme 설정을 @theme CSS 블록에서 관리합니다.
  // src/styles/index.css의 @theme 블록을 참고하세요.
}

export default config
