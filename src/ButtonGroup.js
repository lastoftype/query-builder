import React from 'react'
import styled from 'react-emotion'

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 12px 9px;
  position: relative;

  button {
    margin-left: 16px;
  }

  &:before {
    position: absolute;
    content: ' ';
    display: block;
    left: 12px;
    right: 12px;
    top: 0;
    z-index: 0;
    height: 1px;
    background: #E7EAF1;
  }
`

const ButtonGroup = ({children, ...props}) => (
  <ButtonGroupWrapper>
    {children}
  </ButtonGroupWrapper>
  )

export default ButtonGroup