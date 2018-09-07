import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const LargeInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid #5843CF;
  border-radius: 6px;
  background: #F3F5F8;
  padding: 7px;
  transition: all 150ms ease;
  color: #485674;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 14px;
  letter-spacing: 0.2px;

  &:empty:before {
    content: 'Enter search here';
    display: block; /* For Firefox */
  }

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: #9AA7C0;
  }
`

const LargeInput = ({content, handleChange, ...props}) => (
  <LargeInputWrapper contentEditable="true">
    {content}
  </LargeInputWrapper>
  )

LargeInput.propTypes = {
  content: PropTypes.string,
  handleChange: PropTypes.func
}

LargeInput.defaultProps = {
  content: 'default string'
}

export default LargeInput
