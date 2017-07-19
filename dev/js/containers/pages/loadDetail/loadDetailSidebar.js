import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

class header extends Component{

    render(){
        return (
        	<div></div>
    	);
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

