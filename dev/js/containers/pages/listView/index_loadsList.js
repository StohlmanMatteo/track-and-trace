import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../generic/header';
import Footer from '../../generic/footer';
import ListElement from './listElement';

class LoadsList extends Component{
	render(){
		return(
			<div>
				<Header/>
				
				<div className='contentWrapper'>
					<ListElement/>
				</div>
				
				<Footer/>
			</div>
		)
	}
}

export default LoadsList;