import React from 'react'
import styled from 'react-emotion'

const InputWrapper = styled.input`
  display: flex;
  background: #FFFFFF;
  border: 1px solid #CED3DC;
  border-radius: 5px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 14px;
  color: #485674;
  line-height: 32px;
  padding: 0 10px;
  width: 100%;
  flex: 1 1 100%;

  &::-webkit-input-placeholder {
    color: #A7AEBB;
  }
`

const Input = (props) => (
  <InputWrapper {...props} /> 
  )

export default Input