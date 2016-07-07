import React from 'react';
import {Col, Row,Checkbox,FormControl,ControlLabel,FormGroup,Label } from 'react-bootstrap';
import {Link } from 'react-router';


export default React.createClass({

  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.isMaleInput.checked,
      this.refs.isFemaleInput.checked
    );

  },

  render() {
    return (
        <Row>

        <form id="search">
            搜索马:
          <input  id="form"
          type="text"
          placeholder="输入马的名字"
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />

           <input id="check"
            type="checkbox"
            checked={this.props.isMale}
            ref="isMaleInput"
            onChange={this.handleChange}
          />
          {' '}
          公马
         <input t id="check"
            type="checkbox"
            checked={this.props.isFemale}
            ref="isFemaleInput"
            onChange={this.handleChange}
          />
        {' '}
      母马
      </form>
             </Row>


    );
  }
});
