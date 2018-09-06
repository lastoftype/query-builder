import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const TabWrapper = styled.a`
  display: inline-block;
  color: ${props => props.active ? props.theme.colors.purple[3] : props.theme.colors.gray[4]};
  font-weight: ${props => props.theme.sizes.fontWeights.semibold};
  font-size: 16px;
  padding: 17px 12px;
  cursor: pointer;
`

const LinkUnderline = styled.span`
  position: relative;

  &:after {
    position: absolute;
    z-index: 1;
    content: ' ';
    display: block;
    left: 0;
    right: 0;
    bottom: -17px;
    margin: 0 auto;
    height: 2px;
    background: ${props => props.active ? props.theme.colors.purple[3] : 'transparent'};
    border-radius: 1px;
  }

  &:hover {
    color: ${props => props.active ? props.theme.colors.purple[4] : props.theme.colors.gray[5]};
    &:after {
      background: ${props => props.active ? props.theme.colors.purple[4] : 'transparent'};
    }
  }
`

const Tab = ({children, active, handleClick, tabId, ...props}) => (
  <TabWrapper active={active} onClick={() => handleClick(tabId)}>
    <LinkUnderline active={active}>
      {children}
    </LinkUnderline>
  </TabWrapper>
  )

Tab.propTypes = {
  active: PropTypes.bool,
  tabId: PropTypes.number
}

export default Tab