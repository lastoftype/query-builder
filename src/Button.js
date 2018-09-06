import React from 'react'
import styled from 'react-emotion'
import theme from './theme'

const colorStyles = {
  primary: {
    background: theme.colors.purple[3],
    color: theme.colors.gray[0],
    borderColor: theme.colors.purple[3]
  },
  default: {
    background: theme.colors.gray[0],
    color: theme.colors.gray[6],
    borderColor: '#CED3DC'
  }
}

const ButtonWrapper = styled.button`
  margin: 0;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 14px;
  line-height: 32px;
  border-radius: 5px;
  background: ${props => colorStyles[props.color].background};
  padding: 0 15px;
  border: 1px solid ${props => colorStyles[props.color].borderColor};
  color: ${props => colorStyles[props.color].color};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  box-shadow: 0 1px 3px 0 rgba(222,222,222,0.32);
`

const Button = ({children, color, ...props}) => (
  <ButtonWrapper color={color}>{children}</ButtonWrapper>
  )

export default Button