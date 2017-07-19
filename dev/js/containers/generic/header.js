import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col} from  'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class header extends Component{

	renderTitle(){
		return(
			<div className='headerSection'>
				<a href="/" className='noFancyLink'><h3 className="headerTitle title">Track & Trace</h3></a>
			</div>
		)
	}
	renderCompanyName(){
		var settings=this.props.settings[0];
		return(
			<div className="headerSection">
				<h2 className="headerCompany">{settings.companyName} </h2>
			</div>
			)
	}
	renderHeaderNavDropDown(){
		var activeUser=this.props.activeUser[0];
		if(this.props.headerType!='login'){
			return(
					<Nav className='headerDropdown'>
				        <NavDropdown eventKey="4" title={activeUser.first+' '+activeUser.last} id="nav-dropdown">
				        	<LinkContainer to='/loads'><MenuItem>Home</MenuItem></LinkContainer>
				        	<LinkContainer to='/account/inviteUser'><MenuItem>Invite Users</MenuItem></LinkContainer>
				        	<LinkContainer to='/account/personalInfo'><MenuItem>Account</MenuItem></LinkContainer>
				        	<LinkContainer to='/trailerReport'><MenuItem>Trailer Report</MenuItem></LinkContainer>
				        	<LinkContainer to='/account/upload'><MenuItem>Upload</MenuItem></LinkContainer>
				        	<LinkContainer to='/locations'><MenuItem>Locations</MenuItem></LinkContainer>
				        	<MenuItem divider />
				        	<LinkContainer to='/login'><MenuItem>Log Out</MenuItem></LinkContainer>
				        </NavDropdown>
				    </Nav>
				)
		}
		else{
			return (
					<div></div>
				);
		}
	}
	renderHeaderNavButton(){
		return (
			<div className="headerSection">
				<Button bsStyle="danger" bsSize="small" className='headerButton'>Tasks</Button>
				
			</div>)
	}
	renderLoginButton(){
		return(
			<Button bsStyle="danger" className='loginButton pullRight'>Log In</Button>
		)
	}
	renderHeaderNav(){
		if(this.props.headerType=='login'){
			return(
					this.renderLoginButton()
				);
		}
		else{
			return(
					this.renderHeaderNavButton()
				)
		}
	}
	renderHeader(){
		return(
			<div>
				<Grid className='header' fluid='true'>
					<Row className="show-grid">
						<Col xs={12} md={4}>{this.renderTitle()}</Col>
						<Col xs={12} md={4}>{this.renderCompanyName()}</Col>
						<Col xs={12} md={4}>{this.renderHeaderNav()}</Col>
					</Row>
				</Grid>
				{this.renderHeaderNavDropDown()}
			</div>
		)
	}
	render(){
		console.log('Rendering Header Type: ',this.props.headerType);
		var settings=this.props.settings[0];
		var activeUser=this.props.activeUser[0];

		return(
				this.renderHeader()
			)
	}
}

function mapStateToProps(state){
	return {
		settings: state.settings,
		activeUser: state.activeUser
	};
}

export default connect(mapStateToProps)(header);