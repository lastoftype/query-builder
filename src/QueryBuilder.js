import React, { Component } from 'react'
import styled, { injectGlobal } from 'react-emotion'

import Card from './Card'
import LargeInput from './LargeInput'
import TabGroup from './TabGroup'
import Tab from './Tab'
import TabContent from './TabContent'

import ButtonGroup from './ButtonGroup'
import Button from './Button'
import InputGroup from './InputGroup'

const QueryBuilderWrapper = styled('div')`
  max-width: 996px;
`

const tabs = [
  'User',
  'System',
  'http',
  'Release',
  'Runtime',
  'Source',
  'Custom'
]

export default class QueryBuilder extends Component {

  state = {
    activeTab: 0
  }

  selectTab = (id) => {
    this.setState({
      activeTab: id
    })
  }

  addInputGroup = () => {
    console.log('added!')
  }

  render () {
    return (
      <QueryBuilderWrapper>
        <Card>
          <LargeInput />
          <TabGroup>
            { 
              tabs.map((tab, i) => (
                <Tab 
                  active={i === this.state.activeTab} 
                  tabId={i} 
                  key={i} 
                  handleClick={this.selectTab}>
                    {tab}
                </Tab>
              ))
            }
          </TabGroup>
          <TabContent>
            <InputGroup 
              inputTitle="User ID"
              inputName="userId"
              handleAddInputGroup={this.addInputGroup} />
            <InputGroup 
              inputTitle="User email"
              inputName="userEmail"
              handleAddInputGroup={this.addInputGroup} />
            <InputGroup 
              inputTitle="User name"
              inputName="userName"
              handleAddInputGroup={this.addInputGroup} />
          </TabContent>
          <ButtonGroup>
            <Button color="default">Cancel</Button>
            <Button color="primary">Submit</Button>
          </ButtonGroup>
        </Card>
      </QueryBuilderWrapper>
      )
  }
}
