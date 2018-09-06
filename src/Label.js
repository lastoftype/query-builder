import React from 'react'
import styled from 'react-emotion'

const LabelWrapper = styled.label`
  display: inline-flex;
  font-weight: bold;
  font-size: 14px;
  line-height: 2.285714286;

  span {
    display: flex;
    margin-left: 8px
  }
`

const Label = ({children, ...props}) => (
  <LabelWrapper>
    {children}
  </LabelWrapper>
  )

export default Label