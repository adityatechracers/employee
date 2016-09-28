import React from 'react';
import autoBind from 'react-autobind';
import ListItem from './ListItem';

const List = React.createClass({

	getInitialState() {
		return {
		}
	},

	renderData() {
		let listItems = this.props.employees.map((employee) => {
			return (<ListItem key={employee.id} onEditEmployee = {this.props.onEditEmployee} onDeleteEmployee = {this.props.onDeleteEmployee} editClass ={employee.id === this.props.activeId ? 'highlight-row' : null}  details = {employee} />)
		})
		return (listItems)
	},

	render() {
		return (
			<div>
				<center>
					<div>
						<h1><b>All Employees</b></h1>
					</div>
				</center>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Full Name</th>
							<th>Designation</th>
							<th>Age</th>
							<th>Email</th>
							<th>Gender</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{this.renderData() }
					</tbody>
				</table>
			</div>
		)
	}
})

export default List