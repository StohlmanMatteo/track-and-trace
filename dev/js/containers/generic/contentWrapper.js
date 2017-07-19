import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

class ContentWrapper extends Component{

    render(){
        return (
        	<div className="contentWrapper">
        		{this.props.children}
        	</div>
        	
    	);
    }
}

function mapStateToProps(state) {
	return{
		//loginState:state.loginState
	};
}


export default connect(mapStateToProps)(ContentWrapper);

