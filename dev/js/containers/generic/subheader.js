import React, {Component} from 'react';
import {connect} from 'react-redux';
//import DatePicker from './datepicker';
import DateSelect from './datepicker';
import {createWidthStyle} from './helperFunctions/style';

class subheader extends Component{
	renderUsers(){
		return this.props.users.map((user) =>{
				return(
					  <option key={user.id} value={user.first+' '+user.last}>{user.first} {user.last}</option>
				)
			}
		)
	}
	renderStates(){
		return this.props.settings[0].states.map((state)=>{
			return(
					<option value={state.name} key={state.id+'_dropdown_option'}>{state.name}</option>
				)
		})
	}
	render(){
		return(
			<div className="subHeader">
				<div className='filterCol pullLeft' style={createWidthStyle(60)}>
					<input className="input-lg searchbar" placeholder={this.props.config[0]['searchBarPlaceholder']}/>

					<select className='select-lg'>
					  {this.renderUsers()}
					</select>

					<select className='select-lg'>
					  {this.renderStates()}
					</select>

				</div>
				<div className='dateCol pullRight' style={createWidthStyle(30)}>
					<div className="pullRight">
						<DateSelect></DateSelect>
					</div>
					<div className="pullRight">
						<DateSelect></DateSelect>
					</div>
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		config: state.config,
		settings: state.settingsReducer,
		activeUser: state.activeUser,
		users: state.users
	};
}

export default connect(mapStateToProps)(subheader);