import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const SelectWrapper = styled.select`
  display: flex;
  background: #FFFFFF;
  border: 1px solid #CED3DC;
  box-shadow: 0 1px 3px 0 rgba(222,222,222,0.32);
  border-radius: 5px;
  min-height: 34px;
  font-size: 14px;
  color: #485674;
  padding: 12px 10px;
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  font-family: ${props => props.theme.fonts.primary};
`

const Select = ({children, handleChange, props}) => (
  <SelectWrapper onChange={(e) => handleChange(e.target.value)}>
    {children}
  </SelectWrapper> 
  )

Select.propTypes = {
  // handleChange: PropTypes.func.isRequired
}

export default Select