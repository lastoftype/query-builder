import React, { Component } from 'react'
import styled, { injectGlobal } from 'react-emotion'
import hash from 'object-hash'

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
    activeTab: 0,
    tabs: {
      user: {
        inputs: [
          {
            id: 1,
            inputName: 'userId',
            inputTitle: 'User ID',
            inputType: 0
          },
          {
            id: 2,
            inputName: 'userEmail',
            inputTitle: 'User email',
            inputType: 0
          },
          {
            id: 3,
            inputName: 'userName',
            inputTitle: 'User name',
            inputType: 0
          }
        ]
      },
      system: {},
      http: {},
      release: {},
      runtime: {},
      source: {},
      custom: {}
    },
    refs: [],
    params: []
  }

  constructor(props) {
    super(props);
    this.refs = [];
  }

  selectTab = (id) => {
    this.setState({
      activeTab: id
    })
  }

  addInputGroup = () => {

    let newInputGroup = {
      id: 4, 
      inputName: 'userLocation', 
      inputTitle: 'User location', 
      inputType: 0
    };

    this.setState(prevState => {
      let newState = Object.assign({}, prevState);
      newState.tabs.user.inputs.push(newInputGroup);
      return newState;
    })
  }

  handleChange(inputName, val) {
    this.setState(prevState => ({
      params: [...prevState.params, {key: inputName, value: val}]
    }));
    console.log(this.state.params);
  }

  render () {
    return (
      <QueryBuilderWrapper>
        <Card>
          <LargeInput tags={this.state.params} />
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
            {
              this.state.tabs.user.inputs.map(({inputName, inputTitle}, i) => {
                return (
                  <InputGroup 
                    key={i}
                    inputTitle={inputTitle}
                    inputName={inputName}
                    handleChange={(val) => this.handleChange(inputName, val)}
                    handleSelect={(val) => console.log(val)}
                    handleAddInputGroup={this.addInputGroup} />
                  )
              })
              }
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
