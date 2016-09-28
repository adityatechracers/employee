import React from 'react';
import autoBind from 'react-autobind';
import assign from 'object-assign';


const Form = React.createClass({

  getInitialState() {
    return {
      employee: {},
      visiblity: 'hidden',
      errorMessage: ''
    }
  },

  propTypes: {
    currentEmployee: React.PropTypes.object.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    addEmployee: React.PropTypes.func.isRequired,
    updateEmployee: React.PropTypes.func.isRequired,
    action: React.PropTypes.string.isRequired
  },


  componentWillReceiveProps(nextProps) {
    this.setState({
      employee: nextProps.currentEmployee
    })
  },

  onSubmit(event) {
    event.preventDefault();
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.state.employee.name == '') {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Name is required.'
      })
      return false;
    }
    else if (!regex.test(this.state.employee.email)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Email should be in proper format.'
      })
      return false;
    }
    else if (this.state.employee.age == '' && isNaN(this.state.employee.age)) {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Age is required.'
      })
      return false;
    }
    else if (this.state.employee.gender != 'Male' && this.state.employee.gender != 'Female') {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Gender must be either Male or Female.'
      })
      return false;
    }
    else if (this.state.employee.designation == '') {
      this.setState({
        visiblity: 'visible',
        errorMessage: 'Designation is required.'
      })
      return false;
    }
    else {
      if (this.props.action == 'update')
        this.props.updateEmployee(this.state.employee);
      else if (this.props.action == 'add')
        this.props.addEmployee(this.state.employee);
    }
  },

  onDesignationChange(event) {
    this.setState({
      employee: Object.assign({}, this.state.employee, { designation: event.target.value }),
      errorMessage: ''
    })
  },

  onNameChange(event) {
    this.setState({
      employee: Object.assign({}, this.state.employee, { name: event.target.value }),
      errorMessage: ''
    })
  },

  onEmailChange(event) {
    this.setState({
      employee: Object.assign({}, this.state.employee, { email: event.target.value }),
      errorMessage: ''
    })
  },

  onAgeChange(event) {
    this.setState({
      employee: Object.assign({}, this.state.employee, { age: event.target.value }),
      errorMessage: ''
    })
  },

  onGenderChange(event) {
    this.setState({
      employee: Object.assign({}, this.state.employee, { gender: event.target.value }),
      errorMessage: ''
    })
  },

  render() {
    return (
      <div>
        <center>
          <div>
            <h2><b>Add a Employee</b></h2>
          </div>
        </center>
        <div>
          <form className = "employee-form" onSubmit = {this.onSubmit} >
            <span className = {this.state.visiblity}>{this.state.errorMessage}</span>
            <div className="form-group">
              <label for="exampleInputEmail1">Gender</label>
              <select className="form-control" onChange = {this.onGenderChange} value = {this.state.employee.gender ? this.state.employee.gender : ''}>
                <option value='' selected disabled>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input className="form-control" type="text" placeholder = "name(required)" required = "true" value = {this.state.employee.name ? this.state.employee.name : ''} onChange = {this.onNameChange} />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Designation</label>
              <input className="form-control" type="text" placeholder = "designation(required)" required = "true" value = {this.state.employee.designation ? this.state.employee.designation : ''} onChange = {this.onDesignationChange} />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Age</label>
              <input className="form-control" type="number" placeholder = "age(required)" required = "true" value = {this.state.employee.age ? this.state.employee.age : ''} onChange = {this.onAgeChange} />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input className="form-control" type="email" placeholder = "email(required)" required = "true" value = {this.state.employee.email ? this.state.employee.email : ''} onChange = {this.onEmailChange} />
            </div>
            <div className="btn-toolbar">
              <button className="btn btn-success" type = "submit">{this.props.action} a employee</button>
              <button className="btn btn-danger" onClick = {this.props.onCancel} >cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})

export default Form;
