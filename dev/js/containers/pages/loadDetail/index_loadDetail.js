import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../generic/header';
import Footer from '../../generic/footer';
import {updateActiveLoad} from "../../../actions/index.js";
import LoadDetailSidebar from './loadDetailSidebar';
import {Row, Col} from 'react-bootstrap';


class LoadDetail extends Component{
	render(){
		return(
			<div>
				<Header/>
				
				<div className='contentWrapper'>
					<Row>
						<Col md={2}></Col>
						<Col md={10}></Col>
					</Row>
				</div>
				
				<Footer/>
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
	return	bindActionCreators({updateActiveLoad:updateActiveLoad},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginDialog);

