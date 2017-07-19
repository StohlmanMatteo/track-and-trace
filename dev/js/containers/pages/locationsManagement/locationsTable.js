import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn, SizePerPageDropDown} from 'react-bootstrap-table';

const selectRow = {
	    mode: 'radio' // or checkbox
	  };

class LocationsTable extends Component{	
	constructor(props){
		super(props);
	}
	onToggleDropDown(toggleDropDown){
	  // do your stuff here
	  console.log('toggle dropdown');
	  toggleDropDown();
	}
	renderSizePerPageDropDown(props){
		console.log(this);
		return (
		<SizePerPageDropDown
		  className='my-size-per-page'
		  btnContextual='btn-warning'
		  variation='dropup'
		  onClick={ () => this.onToggleDropDown(props.toggleDropDown) }/>
		);
	}
	render(){
		var data=this.props.locations;
		const options = {
			sizePerPageList: [ 
								{
							      text: '10', value: 10
							    },
								{
							      text: '20', value: 20
							    }, 
							    {
							      text: '30', value: 30
							    }, 
							    {
							      text: 'All', value: data.length
							    } ],
			sizePerPage: 15,
			sizePerPageDropDown: this.renderSizePerPageDropDown
			};
		function objectFormat(data, cell) {
			if(data.constructor===Array){
				if(data[0]=='last'){
					return `<p>${cell[data.length-1][data[1]]}</p>`
				}
				return `<p>${cell[data[0]][data[1]]}</p>`
			}
			return `<p>${cell[data]}</p>`;
		}
		
		return(
			<div className='listWrapper'>
				<BootstrapTable 
					data={ data }
					striped
					hover
					condensed
					pagination
					insertRow
					search
					selectRow={selectRow}
					ignoreSinglePage
					options={ options }
					variation='dropup'
					//height='80%'
					//tableStyle={ { background: '#00ff00' } }
					className='listsTable'
					multicolumnsearch


					//containerStyle={ { height: '100%' } }
					>
						<TableHeaderColumn row='0' dataSort rowSpan='2' hidden isKey dataField="id">id</TableHeaderColumn>
						<TableHeaderColumn row='0' dataSort rowSpan='2' dataField='locationName'>Location Name</TableHeaderColumn>
						<TableHeaderColumn row="0" dataSort colSpan='5'>Address</TableHeaderColumn>
						<TableHeaderColumn row='1' dataSort dataField='address1'>Street Address</TableHeaderColumn>
						<TableHeaderColumn row='1' dataSort dataField="address2">Appt/Unit</TableHeaderColumn>
						<TableHeaderColumn row='1' dataSort dataField="city">City</TableHeaderColumn>
						<TableHeaderColumn row='1' dataSort dataField="state">State</TableHeaderColumn>
						<TableHeaderColumn row='1' dataSort dataField="postalCode">Zip</TableHeaderColumn>
						<TableHeaderColumn row='0' dataSort rowSpan='2' dataField="type">Type</TableHeaderColumn>
				      
				</BootstrapTable>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		locations:state.locations
	};
}



export default connect(mapStateToProps)(LocationsTable);

