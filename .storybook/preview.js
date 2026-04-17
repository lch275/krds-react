import '../src/styles/index.css'

const preview = {
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
    backgrounds: { disable: true },
    controls: {
      expanded: true,
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Getting Started', 'Tokens'],
          'Primitives',
          'UI',
          'Data',
          'Identity',
          'Navigation',
          'Feedback',
          'Help',
          'Layout',
          'Overlays',
          'Patterns',
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light'
      document.documentElement.setAttribute('data-theme', theme)
      return Story()
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light mode' },
          { value: 'dark', title: 'Dark mode' },
        ],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
