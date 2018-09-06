import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import plus from './icon-plus.svg'
import question from './icon-question.svg'

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`

const getIconUrl = (name) => {
  const icons = {
    plus,
    question
  }
  return icons[name]
}

const Icon = ({children, icon, handleClick, ...props}) => (
  <IconWrapper onClick={() => handleClick()}>
    <img src={getIconUrl(icon)} />
  </IconWrapper>
  )

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon