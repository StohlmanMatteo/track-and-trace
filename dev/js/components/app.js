import React, {Component} from 'react';
require('../../scss/style.scss');
import Header from '../containers/generic/header';
import LoadsList from '../containers/pages/listView/index_loadsList';
import LoadDetail from 	'../containers/pages/loadDetail/index_loadDetail';
import Login from 		'../containers/pages/login/index_login';
import {HashRouter} from 'react-router-dom';
import AccountSettings from '../containers/pages/accountSettings/index_accountSettings';
import TrailerReport from '../containers/pages/trailerReport/index_trailerReport';
import LocationsManagement from '../containers/pages/locationsManagement/index_locationsManagement';


var ReactRouter= require('react-router-dom');
var Router= ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends Component{
	render(){
		return(
				<HashRouter>
					<div>
						<Route exact path='/' component={LoadsList}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path='/loads' component={LoadsList}></Route>
						<Route path="/account" component={AccountSettings}></Route>
						<Route path="/load/:id" component={LoadDetail}></Route>
						<Route path="/trailerReport" component={TrailerReport}></Route>
						<Route path="/locations" component={LocationsManagement}></Route>
					</div>
				</HashRouter>
				
			)
	}

}

export default App;
