import React from 'react'
import styled from 'react-emotion'

const TabContentWrapper = styled.div`
  width: 100%;
  padding: 24px 12px;
`

const TabContent = ({children, ...props}) => (
  <TabContentWrapper>
    {children}
  </TabContentWrapper>
  )

export default TabContent