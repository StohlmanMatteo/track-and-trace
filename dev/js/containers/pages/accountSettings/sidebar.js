import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

class Sidebar extends Component{

    render(){
        return (
        	<div id="sidebar-menu" className=''>
	            <Navbar fluid className='' inverse >

	                <Navbar.Header>
	                    <Navbar.Brand>
	                        <a href="/">User Name</a>
	                    </Navbar.Brand>
	                    <Navbar.Toggle />
	                </Navbar.Header>

	                <Navbar.Collapse>
	                    <Navbar.Text className=''>
	                        <Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>
	                        <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
	                    </Navbar.Text>
	                    <Nav>
	                        <NavDropdown eventKey={1} title="Item 1">
	                            <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
	                        </NavDropdown>
	                        <NavItem eventKey={2}>Item 2</NavItem>
	                        <NavItem eventKey={3}>Item 3</NavItem>
	                    </Nav>
	                </Navbar.Collapse>

	            </Navbar>
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

export default connect(mapStateToProps)(Sidebar);

