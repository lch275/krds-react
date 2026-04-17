import { resolve } from 'path'

const config = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    const storybookBasePath = process.env.STORYBOOK_BASE_PATH

    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(import.meta.dirname, '../src'),
    }

    if (storybookBasePath) {
      config.base = storybookBasePath
    }

    return config
  },
}

export default config
