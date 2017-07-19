import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../generic/header';
import Footer from '../../generic/footer';
import LoginDialog from './LoginDialog';



class Login extends Component{
	render(){
		return(
				<div className='bg-truck' style={{height:'100vh'}}>
					<Header headerType='login'/>
						<LoginDialog type='login' />
					<Footer/>
				</div>
		)
	}
}



export default Login;