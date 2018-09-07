import React from 'react'
import styled, {injectGlobal} from 'react-emotion'
import PropTypes from 'prop-types'
import TagsInput from 'react-tagsinput'

injectGlobal`
  .react-tagsinput {
  background-color: transparent;
  border: none;
  overflow: hidden;
  padding-left: 0;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;

  &--focused {
    border-color: #a5d24a;
  }

  > span {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }
}

.react-tagsinput-tag {
  background-color: transparent;
  border-radius: 0;
  border: 1px solid transparent;
  color: #485674;
  display: inline-block;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-right: 10px;
  padding: 0;
  border-bottom: 1px dashed #B8BECA;
}

.react-tagsinput-remove {
  cursor: pointer;
  font-weight: bold;
}

.react-tagsinput-tag a::before {
  content: "";
}

.react-tagsinput-input {
  display: flex;
  width: 100%;
  background: transparent;
  border: 0;
  color: #777;
  font-family: 'source sans pro', sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
  outline: none;
  padding: 5px;
  width: 80px;
  padding: 7px;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.2px;
  color: #485674;
}

`

const LargeInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid #5843CF;
  border-radius: 6px;
  background: #F3F5F8;
  /*padding: 7px;*/
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

class LargeInput extends React.Component {
  state = {
    tags: []
  }

  constructor(props) {
    super(props);
  }

  handleChange(tags) {
    this.setState({tags})
  }

  get keyValsAsTags() {
    return this.props.tags.map(({key, value}, i) => {
      return `${key}: ${value}`
    })
  }

  render() {

    const {content, handleChange } = this.props;

    return (
      <LargeInputWrapper>
        <TagsInput 
          value={this.keyValsAsTags}
          onChange={(tags) => this.handleChange(tags)} />
      </LargeInputWrapper>
      )
  }
}


LargeInput.propTypes = {
  content: PropTypes.string,
  handleChange: PropTypes.func,
  tags: PropTypes.array
}

LargeInput.defaultProps = {
  content: 'default string'
}

export default LargeInput
