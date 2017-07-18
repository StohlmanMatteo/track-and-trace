import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Nav, NavItem, Glyphicon,Tab,Row,Col} from 'react-bootstrap';
import {FormGroup, FormControl, ControlLabel,Button,Checkbox,Form} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Redirect } from 'react-router'



class SettingsDialog extends Component{
	renderPersonalInfo(){
		return(
			<FormGroup controlId="formBasicText">
					<FormControl type="text" placeholder="first name" className='cleanInput mb-15'></FormControl>
					<FormControl type="text" placeholder="last name" className='cleanInput mb-15'></FormControl>
					<FormControl type="text" placeholder="email" className='cleanInput mb-15'></FormControl>
					<FormControl type="text" placeholder="phone" className='cleanInput mb-15'></FormControl>							
					<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
			</FormGroup>
		)
	}
	renderChangePassword(){
		return(
			<FormGroup controlId="formBasicText">
					<FormControl type="password" placeholder="old password" className='cleanInput'></FormControl>
					<FormControl type="password" placeholder="new password" className='cleanInput'></FormControl>	
					<FormControl type="password" placeholder="confirm new password" className='cleanInput'></FormControl>	
					<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
			</FormGroup>
		)
	}
	renderInviteUser(){
		return(
			<FormGroup controlId="formBasicText">
					<FormControl type="text" placeholder="first name" className='cleanInput mb-15'></FormControl>
					<FormControl type="text" placeholder="last name" className='cleanInput mb-15'></FormControl>
					<FormControl type="text" placeholder="email" className='cleanInput mb-15'></FormControl>
					<FormControl type="text" placeholder="phone" className='cleanInput mb-15'></FormControl>							
					<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
			</FormGroup>
		)
	}
	renderUpload(){
		return(
			<FormGroup controlId="formBasicText">
					<input type="file" name="upl" id="attachfile" data-validation="file_size_exceed" required="required" multiple=""/>

					<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
			</FormGroup>
		)
	}
	renderChecklistOptions(label){
		return(
			<FormGroup controlId="formBasicText">
				<ControlLabel>{label}</ControlLabel>
				<Checkbox>notify via email immediately</Checkbox>
				<Checkbox>notify via email once daily</Checkbox>
				<Checkbox>do not notify</Checkbox>				
			</FormGroup>
			
		)
	}
	renderNotificationSettings(){
		return(
			<Form>
				<Row>
					<Col xs={12} md={6}>
						{this.renderChecklistOptions('Status')}	
						{this.renderChecklistOptions('Freight Bill')}	
						{this.renderChecklistOptions('Shipper Details')}	
					</Col>
					<Col xs={12} md={6}>
						{this.renderChecklistOptions('Delivery Details')}	
						{this.renderChecklistOptions('Notes')}	
						{this.renderChecklistOptions('Check Call / Update')}	
					</Col>
				</Row>								
				<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
			</Form>
		)
	}
	renderTabPane(type){
		switch(type){
			case 'personalInfo':
				return(<div className="tabPaneContainer">{this.renderPersonalInfo()}</div>)
				break;

				case 'changePassword':
					return(<div className="tabPaneContainer">{this.renderChangePassword()}</div>);
					break;

				case 'inviteUser':
					return(<div className="tabPaneContainer">{this.renderInviteUser()}</div>);
					break;

				case 'notificationSettings':
					return(<div className="tabPaneContainer">{this.renderNotificationSettings()}</div>);
					break;

				case 'upload':
					return(<div className="tabPaneContainer">{this.renderUpload()}</div>);
					break;
		}
		
	}
	componentWillReceiveProps(nextProps) {  // when props change!
			console.log("CompWillRecProps: ",nextProps.type);
			console.log("CompWillRecProps: ",this.props.type);
	        if (nextProps.type !== this.props.type) {
	            // reinits state for next rendering:
	            this.setState((prevState, props) => {
	              return {type: nextProps.type};
	            });
	        }
	}
	
	handleSelect(key){
		console.log(key);
		this.setState((prevState, props) => {
			              return {type: key};
			            });
	}
	renderTabContainer(activeKey){
		console.log("TabContRender: ",activeKey);
		return(
			  <Tab.Container id="left-tabs-example" onSelect={this.handleSelect.bind(this)} activeKey={this.props.type}>
			    <Row className="clearfix">
			      
			      <Col sm={2}>
			        <Nav bsStyle="pills" stacked>
			          <NavItem eventKey="personalInfo">
			            Personal Info
			          </NavItem>
			          <NavItem eventKey="changePassword">
			            Change Password
			          </NavItem>
			          <NavItem eventKey="inviteUser">
			            Invite Users
			          </NavItem>
			          <NavItem eventKey="notificationSettings">
			            Notification Settings
			          </NavItem>
			          <NavItem eventKey="upload">
			            Upload
			          </NavItem>
			        </Nav>
			      </Col>
			      
			      <Col sm={10}>
			        <Tab.Content animation>
						<Tab.Pane className='settingsPane' eventKey="personalInfo">
							{this.renderTabPane('personalInfo')}
						</Tab.Pane>
						<Tab.Pane className='settingsPane' eventKey="changePassword">
							{this.renderTabPane('changePassword')}
						</Tab.Pane>
						<Tab.Pane className='settingsPane' eventKey="inviteUser">
							{this.renderTabPane('inviteUser')}
						</Tab.Pane>
						<Tab.Pane className='settingsPane' eventKey="notificationSettings">
							{this.renderTabPane('notificationSettings')}
						</Tab.Pane>
						<Tab.Pane className='settingsPane' eventKey="upload">
							{this.renderTabPane('upload')}
						</Tab.Pane>
			        </Tab.Content>
			      </Col>

			    </Row>
			  </Tab.Container>
		);
	}
    render(){
    	console.log("Render: ",this.props.type)
		if(this.props.type){
			var activeKey=this.props.type;
		}
		else{
			var activeKey='personalInfo';
		}
        return (
        	<div className="settingsDialog">
				{this.renderTabContainer(activeKey)}
        	</div>
        	
    	);
    }
}

function mapStateToProps(state) {
	return{
		//loginState:state.loginState
	};
}

// function matchDispatchToProps(dispatch){
// 	return	bindActionCreators({updateLoginScreen:updateLoginScreen},dispatch)
// }

export default connect(mapStateToProps)(SettingsDialog);

