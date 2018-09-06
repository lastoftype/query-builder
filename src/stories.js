import React from 'react'
import { storiesOf } from '@storybook/react'
import { Theme } from '@timberio/ui'
import QueryBuilder from './QueryBuilder';
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'react-emotion'

import theme from './theme'

injectGlobal`
  body {
    font-family: ${theme.fonts.primary};
    font-size: ${theme.sizes.fontSizes[2]};
    color: ${theme.colors.gray[5]};
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
  }
`

storiesOf('QueryBuilder', module).add('Defaults', () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryBuilder />
    </ThemeProvider>
  )
})
