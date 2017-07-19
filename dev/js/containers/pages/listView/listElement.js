import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn, SizePerPageDropDown} from 'react-bootstrap-table';

const selectRow = {
	    mode: 'radio' // or checkbox
	  };


class listElement extends Component{	
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
		var data=this.props.loads;
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
					exportCSV
					insertRow
					search
					selectRow={selectRow}
					ignoreSinglePage
					options={ options }
					variation='dropup'
					//height='80%'
					//tableStyle={ { background: '#00ff00' } }
					className='listsTable'
					multiColumnSearch

					//containerStyle={ { height: '100%' } }
					>
				      <TableHeaderColumn dataSort hidden isKey dataField="id">Bill To Name</TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField='freightBill' 
				      	dataFormat={ objectFormat.bind(this, 'number')} 
				      	filterValue={ objectFormat.bind(this, 'number')}
				      	>Freight Bill #</TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField='tractor'>Tractor</TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField='billOfLading'>BOL</TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField='account'>Account</TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField='stops' 
				      	dataFormat={ objectFormat.bind(this, [0,'dateTimeAddress'])} 
				      	filterValue={ objectFormat.bind(this, [0,'dateTimeAddress'])}
				      	//tdStyle={ { wordWrap: 'break-word' } }
				      	>Origin
				      </TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField='stops' 
				      	dataFormat={ objectFormat.bind(this, [0,'dateTimeAddress'])} 
				      	filterValue={ objectFormat.bind(this, [0,'dateTimeAddress'])}>
				      	Destination
				      </TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField='carrier'>Carrier</TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField="billToName">Bill To Name</TableHeaderColumn>
				      <TableHeaderColumn dataSort dataField="state">State</TableHeaderColumn>

				      
				</BootstrapTable>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		loads: state.loads
	};
}

export default connect(mapStateToProps)(listElement);