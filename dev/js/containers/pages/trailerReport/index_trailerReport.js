import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../generic/header';
import Footer from '../../generic/footer';
import TrailersTable from './trailersTable';



class TrailerReport extends Component{
	render(){
		return(
			<div>
				<Header/>
				<div className='contentWrapper'>
					<h4 className='text-center mt-0 mb-0'> Trailer Report </h4>
					<TrailersTable/>
				</div>
				<Footer/>
			</div>
		)
	}
}

// function mapStateToProps(state) {
// 	return{
// 		trailerReport:state.trailerReport
// 	};
// }

// function matchDispatchToProps(dispatch){
// 	return	bindActionCreators({updateLoginScreen:updateLoginScreen},dispatch)
// }

export default TrailerReport;

