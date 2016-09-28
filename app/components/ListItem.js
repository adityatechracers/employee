import React from 'react';
import autoBind from 'react-autobind';

const ListItem = React.createClass({

  getInitialState() {
    return {
    }
  },

  _handleEdit() {
    this.props.onEditEmployee(this.props.details)
  },

  _handleDelete() {
    this.props.onDeleteEmployee(this.props.details)
  },

  render() {
    const employeeDetails = this.props.details
    const employeeRow = Object.keys(this.props.details).map(function (key, idx) {
      return (
        <td key={idx + 1}>
          {employeeDetails[key]}
        </td>
      )
    })

    return (
      <tr className = {this.props.editClass} >
        {employeeRow}
        <td><button className="btn btn-warning btn-sm" onClick = {this._handleEdit}>Edit</button></td>
        <td><button className="btn btn-danger btn-sm" onClick = {this._handleDelete}>Delete </button></td>
      </tr>
    )
  }
})

export default ListItem