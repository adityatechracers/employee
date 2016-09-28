import React from 'react';
import autoBind from 'react-autobind';
import ListItem from './ListItem';

const List = React.createClass({

	makeId() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 5; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	},

	getInitialState() {
		return {
		}
	},

	componentWillMount() {
	},

	componentWillReceiveProps(nextProps) {
	},

	renderData() {
		let listItems = this.props.employees && this.props.employees.map((employee) => {
			return (
				<ListItem
					key={employee.id + this.makeId() }
					onEdit = {() => this.props.onEditEmployee(employee) }
					onDelete = {() => this.props.onDeleteEmployee(employee) }
					editClass={employee.id === this.props.activeId ? 'highlight-row' : null}
					details = {employee}
					/>
			)
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