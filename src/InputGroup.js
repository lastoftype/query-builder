import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import Label from './Label'
import Icon from './Icon'
import Input from './Input'
import Select from './Select'

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

  &:last-child {
    margin: 0;
  }
`

const InputGroup = ({children, handleAddInputGroup, handleSelect, handleChange, inputName, inputTitle, ...props}) => (
  <InputGroupWrapper>
    <InputGroupCol flex="0 1 150px">
      <Label>{inputTitle} <span><Icon icon="question" /></span></Label>
    </InputGroupCol>
    <InputGroupCol flex="0 0 150px">
      <Select 
        style={{width: '100%'}} 
        handleChange={(val) => handleChange(val)}>
        <option value="contains">Contains</option>
        <option value="doesntcontain">Does not contain</option>
      </Select>
    </InputGroupCol>
    <InputGroupCol flex="1 1 auto">
      <Input
        onChange={(e) => handleChange(e.target.value)}
        type="text" 
        placeholder="e.g. 1234567" />
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
  inputName: PropTypes.string.isRequired,
  handleAddInputGroup: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default InputGroup