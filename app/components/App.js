import React from 'react';
import autoBind from 'react-autobind';
import List from './List';
import Form from './Form';
import data from '../data';

const App = React.createClass({

  getInitialState() {
    return {
      employees: [],
      currentEmployee: {},
      activeId: '',
      index: 0,
      action: 'add'
    };
  },

  loadSampleData() {
    this.setState(data);
  },

  componentWillMount() {
    this.loadSampleData();
  },

  findIndex(id) {
    for (let i = 0; i < this.state.employees.length; i++) {
      if (this.state.employees[i].id == id)
        return i;
    }
  },

  onEditEmployee(employee) {
    const index = this.findIndex(employee.id);
    this.setState({
      activeId: employee.id,
      currentEmployee: employee,
      index: index,
      action: 'update'
    });
  },

  onDeleteEmployee(employee) {
    const index = this.findIndex(employee.id);
    let employees = this.state.employees;
    employees.splice(index, 1);
    this.setState({
      employees: employees,
      currentEmployee: {},
      activeId: ''
    })
  },

  addEmployee(newEmployee) {
    let employees = this.state.employees;
    let name = newEmployee.name;
    let designation = newEmployee.designation;
    let email = newEmployee.email;
    let age = newEmployee.age;
    let gender = newEmployee.gender;
    let id = Math.floor((Math.random() * 100) + 1);
    employees.push({ id, name, designation, age, email, gender });
    this.setState({
      employees: employees
    });
  },

  updateEmployee(updateEmployee) {
    let employees = this.state.employees;
    employees[this.state.index] = updateEmployee;
    this.setState({
      employees: employees,
      currentEmployee: {},
      activeId: '',
      action: 'add'
    })
  },

  onCancel() {
    this.setState({
      currentEmployee: {},
      activeId: '',
      action: 'add'
    })
  },

  render() {
    return (
      <div>
        <div className="col-md-3" >
          <Form addEmployee = {this.addEmployee} updateEmployee = {this.updateEmployee} currentEmployee = {this.state.currentEmployee} action = {this.state.action} onCancel = {this.onCancel} />
        </div>
        <div className="col-md-9" >
          <List employees = {this.state.employees} onEditEmployee = {this.onEditEmployee} onDeleteEmployee = {this.onDeleteEmployee} activeId = {this.state.activeId}/>
        </div>
      </div>
    )
  }

});

export default App;