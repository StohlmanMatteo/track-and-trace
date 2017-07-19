import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from "./components/app";
import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';

const themeName = 'flatly';



const store = createStore(allReducers);



ReactDOM.render(
	<Provider store={store}>
		<ThemeSwitcher themePath="/css/themes" defaultTheme={themeName}>
			<App/>
		</ThemeSwitcher>
	</Provider>
	,
	document.getElementById('container-fluid'));


