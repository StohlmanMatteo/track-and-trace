import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../generic/header';
import Footer from '../../generic/footer';
import LocationsTable from './locationsTable';



class LocationsManagement extends Component{
	render(){
		return(
			<div>
				<Header/>
				<div className='contentWrapper'>
					<h4 className='text-center mt-0 mb-0'> Locations Management </h4>
					<LocationsTable/>
				</div>
				<Footer/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return{
		trailerLocations:state.trailerLocations
	};
}

// function matchDispatchToProps(dispatch){
// 	return	bindActionCreators({updateLoginScreen:updateLoginScreen},dispatch)
// }

export default connect(mapStateToProps)(LocationsManagement);

