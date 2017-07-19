import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Footer extends Component{
	
	render(){
		var settings=this.props.settings[0];
		var activeUser=this.props.activeUser[0];
		return(
			<div className='footerContainer'>
				
				
				<img src="http://uploads.webflow.com/5939c71a24f8d7543342a16f/5939c8a9102b284a024357e4_tt-logo-193x45.png" className='footerlogo' alt=""/>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		settings: state.settings,
		activeUser: state.activeUser
	};
}

export default connect(mapStateToProps)(Footer);