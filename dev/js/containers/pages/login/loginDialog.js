import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FormGroup, FormControl, ControlLabel,Button,Checkbox} from 'react-bootstrap';
import {updateLoginScreen} from "../../../actions/index.js";


class LoginDialog extends Component{
	renderLogin(){
		return(
				<div className="logincontainer">
					<form action="" className='text-center'>
						<FormGroup controlId="formBasicText">
								<FormControl type="text" placeholder="username" className='cleanInput mb-15'></FormControl>
								<FormControl type="password" placeholder="password" className='cleanInput'></FormControl>
								<Checkbox className='pull-left'>Remember me</Checkbox>									
								<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
						</FormGroup>
					</form>
					
					<div className="logiinoptionscontainer">
						<div >
							<div >
								<div className="loginlink pullLeft" onClick={()=> this.props.updateLoginScreen('forgotPassword')}>Forgot your password?</div>
							</div>
							<div >
								<div className="loginlink pull-right text-right" onClick={()=> this.props.updateLoginScreen('register')}>Register</div>
							</div>
						</div>
					</div>
				</div>
		);	  
	}
	renderForgotPassword(){
		return(
			<div className="logincontainer">
				<form action="" className='text-center'>
					<FormGroup controlId="formBasicText">
							<FormControl type="text" placeholder="email" className='cleanInput mb-15'></FormControl>								
							<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
					</FormGroup>
				</form>
				
				<div className="logiinoptionscontainer">
					<div >
						<div >
							<div className="loginlink pullLeft" onClick={()=> this.props.updateLoginScreen('login')}>Log In</div>
						</div>
						<div >
							<div className="loginlink pull-right text-right" onClick={()=> this.props.updateLoginScreen('register')}>Register</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	renderRegister(){
		return(
			<div className="logincontainer">
				<form action="" className='text-center'>
					<FormGroup controlId="formBasicText">
							<FormControl type="text" placeholder="first name" className='cleanInput mb-15'></FormControl>
							<FormControl type="text" placeholder="last name" className='cleanInput mb-15'></FormControl>
							<FormControl type="text" placeholder="email" className='cleanInput mb-15'></FormControl>
							<FormControl type="password" placeholder="password" className='cleanInput'></FormControl>
							<FormControl type="password" placeholder="password confirmation" className='cleanInput'></FormControl>								
							<Button type="submit" bsStyle='success' className='mt-15 pull-right'>Submit</Button>
					</FormGroup>
				</form>
				
				<div className="logiinoptionscontainer">
					<div >
						<div >
							<div className="loginlink pullLeft" onClick={()=> this.props.updateLoginScreen('login')}>Log In</div>
						</div>
						<div >
							<div className="loginlink pull-right text-right" onClick={()=> this.props.updateLoginScreen('forgotPassword')}>Forgot you password?</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	switchLogin(){
		console.log('switchLoginRecieved', this.props.loginState);
		switch(this.props.loginState){
			case 'login':
				return (this.renderLogin());
				break;
			case 'forgotPassword':
				return (this.renderForgotPassword());
				break;
			case 'register':
				return (this.renderRegister());
				break;
			default:
				//console.log("switchLoginRecieved: ",this.props.type);
		}
	}

	render(){
		return(
				<div className='loginWrapper'>
					<div className="loginheader">
							<h1 className="noMargins whiteText ml-15">Login</h1>
					</div>
					{this.switchLogin()}
					  				
				</div>
		)
	}
}

function mapStateToProps(state) {
	return{
		loginState:state.loginState
	};
}

function matchDispatchToProps(dispatch){
	return	bindActionCreators({updateLoginScreen:updateLoginScreen},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginDialog);