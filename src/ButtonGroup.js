import React from 'react'
import styled from 'react-emotion'

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 9px 17px;

  button {
    margin-left: 16px;
  }
`

const ButtonGroup = ({children, ...props}) => (
  <ButtonGroupWrapper>
    {children}
  </ButtonGroupWrapper>
  )

export default ButtonGroup