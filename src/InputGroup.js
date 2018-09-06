import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import Label from './Label'
import Icon from './Icon'

const InputGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  margin: 0 0 16px;

  &:last-child {
    margin: 0;
  }
`

const InputGroupCol = styled.div`
  flex: ${props => props.flex};
  margin-right: 15px;
  display: flex;
  align-items: center;
`

const InputGroup = ({children, handleAddInputGroup, inputTitle, ...props}) => (
  <InputGroupWrapper>
    <InputGroupCol flex="0 1 150px">
      <Label>{inputTitle} <span><Icon icon="question" /></span></Label>
    </InputGroupCol>
    <InputGroupCol flex="0 0 150px">
      <select style={{width: '100%'}}>
        <option>asdasd</option>
      </select>
    </InputGroupCol>
    <InputGroupCol flex="1 1 auto">
      <input style={{width: '100%'}} type="text" />
    </InputGroupCol>
    <InputGroupCol flex="0 1 auto">
      <Icon 
        icon="plus"
        handleClick={() => handleAddInputGroup()} />
    </InputGroupCol>
  </InputGroupWrapper>
  )

InputGroup.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  handleAddInputGroup: PropTypes.func.isRequired
}

export default InputGroup