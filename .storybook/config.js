import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import { configure } from '@storybook/react'

const req = require.context('../src', true, /stories\.js$/)

setOptions({
  name: '🌲 Timber QueryBuilder',
  url: 'https://github.com/timberio/query-builder',
  showAddonPanel: false,
})

setDefaults({
  header: false,
  inline: false,
  maxPropsIntoLine: 2,
})

configure(() => req.keys().forEach(f => req(f)), module)
