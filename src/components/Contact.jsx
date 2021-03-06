import React from 'react'
import { Navbar, Nav , NavItem,FormGroup,FormControl, ControlLabel, Col,Button, Row, Well, Panel} from 'react-bootstrap';
import {Link } from 'react-router'


export default React.createClass({

  getInitialState: function() {
    return {name: '',phone:'',email:'', text: '',clicked:false};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handlePhoneChange: function(e) {
    this.setState({phone: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
   handleCommentSubmit: function(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var phone = this.state.phone.trim();
    var email = this.state.email.trim();
    var text = this.state.text.trim();
    if (!text || !name || !email || !phone) {
      return;
    }
    // TODO: send request to the server
    this.handleCommentSubmit({name: name, text: text, phone:phone, email:email});
    this.setState({name: '', text: '',phone:'',email:'', clicked:true});
  },
  render() {

    if(this.state.clicked == false) {
    return (


<Row>
   <Col  xsOffset={2} sm={4} md={4}>
        <Panel id="adress"  header="联系方式"  bsStyle="warning" >
             发邮件联系我们 <a href="mailto:ewkkxmy@163.com">电子邮件</a><br/>
        马场地址:<br/>
        呼伦贝尔市 , 鄂温克旗<br/>
        巴彦托海镇,  三号草库伦<br/>
        邮编:021100
    </Panel>
   </Col>

   <Col sm={4} md={4} lg={4}>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
             controlId="formBasicText"
             >
               <Panel id="adress"  header="给我们留言"  bsStyle="warning" >
            <FormControl
               type="text"
               placeholder="您的名字"
               value={this.state.name}
               onChange={this.handleNameChange}
        />

           <FormControl
               type="text"
               placeholder="您的电子邮箱"
               value={this.state.email}
               onChange={this.handleEmailChange}
        />
          <FormControl
               type="text"
               placeholder="您的联系电话"
               value={this.state.phone}
               onChange={this.handlePhoneChange}
        />
            <FormControl
               componentClass="textarea"
               type="text"
               placeholder="留言..."
               value={this.state.text}
               onChange={this.handleTextChange}
               />
        </Panel>
            <Button type="submit" value="提交" >
              提交
            </Button>
          </FormGroup>
        </form>
    </Col>
</Row>
    );
    }
    else return (
        <Col  xsOffset={4} sm={4} md={4}>
        <Panel id="adress"  header=" "  bsStyle="warning" >
        谢谢您的留言,<br/>
        我们会尽快和回复您!
        </Panel>
     </Col>
    ) ;
    }
})
