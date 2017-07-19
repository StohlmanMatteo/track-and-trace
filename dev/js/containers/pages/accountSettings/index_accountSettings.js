import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../generic/header';
import Footer from '../../generic/footer';
import ContentWrapper from '../../generic/contentWrapper'
import SettingsDialog from './settingsDialog';

class AccountSettings extends Component{

    render(){
    	var type=this.props.location.pathname.split('/')[2];
        return (
        	<div>
        		<Header/>
        		<ContentWrapper>
        			<SettingsDialog type={type}/>
        		</ContentWrapper>
					
        		<Footer/>
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

export default connect(mapStateToProps)(AccountSettings);

