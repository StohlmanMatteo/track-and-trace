import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn, SizePerPageDropDown} from 'react-bootstrap-table';

const selectRow = {
	    mode: 'radio' // or checkbox
	  };

class TrailersReportTable extends Component{	
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
		var data=this.props.trailerReport;
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
			sizePerPage: 10,
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
						<TableHeaderColumn dataSort hidden isKey dataField="id">id</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField='freightBill' dataFormat={ objectFormat.bind(this, 'number')} filterValue={ objectFormat.bind(this, 'number')}>Freight Bill #</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField='billOfLading'>BOL</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="truckDetails" dataFormat={ objectFormat.bind(this, 'capacity')} filterValue={ objectFormat.bind(this, 'capacity')}>Capacity</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="pickupDate">PU_Date</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="shipper">Shipper</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="shipperTrailerDrop">SHIP_TRL_DRP</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="shipperTrailerPickup">SHIP_TRL_PIC</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="deliveryDate">Delivery Date</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="deliveryLoc">Delivery Loc</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="deliveryTrailerDrop">DEL_TRL_DROP</TableHeaderColumn>
						<TableHeaderColumn dataSort dataField="deliveryTrailerPickup">DEL_TRL_PIC</TableHeaderColumn>				      
				</BootstrapTable>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		trailerReport:state.trailerReport
	};
}



export default connect(mapStateToProps)(TrailersReportTable);

