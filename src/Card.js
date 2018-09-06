import React from 'react'
import styled from 'react-emotion'

const CardWrapper = styled.div`
  padding: 7px;
  background: #FFFFFF;
  box-shadow: 
    0 1px 1px 0 rgba(72,86,116,0.25), 
    0 1px 5px 0 rgba(72,86,116,0.33);
  border-radius: 11px;
`

export default ({children}, ...props) => (
  <CardWrapper>
    {children}
  </CardWrapper>
  )
