import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormGroup, FormControl, ControlLabel,Button,Checkbox} from 'react-bootstrap';


class LoginDialog extends Component{
	render(){
		return(
				<div className='loginWrapper'>
					<div className="loginheader">
							<h1 className="noMargins whiteText ml-15">Login</h1>
					</div>
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
									<a className="loginlink pullLeft" href="/forgotpassword">Forgot your password?</a>
								</div>
								<div >
									<a className="loginlink pull-right text-right" href="/register">Register</a>
								</div>
							</div>
						</div>
					</div>	  				
				</div>
		)
	}
}



export default LoginDialog;