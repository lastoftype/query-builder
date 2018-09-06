import React from 'react'
import styled from 'react-emotion'

const TabGroupWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    position: absolute;
    content: ' ';
    display: block;
    left: 12px;
    right: 12px;
    bottom: 0;
    z-index: 0;
    height: 1px;
    background: #E7EAF1;
  }
`

const TabGroup = ({children, ...props}) => (
  <TabGroupWrapper>
    {children}
  </TabGroupWrapper>
  )

export default TabGroup