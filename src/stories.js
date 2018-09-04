import React from 'react'
import { storiesOf } from '@storybook/react'
import { Theme } from '@timberio/ui'
import QueryBuilder from './';

storiesOf('QueryBuilder', module).add('Defaults', () => {
  return (
    <Theme>
      <QueryBuilder />
    </Theme>
  )
})
