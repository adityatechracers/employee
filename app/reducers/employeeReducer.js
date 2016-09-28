import actions from '../actions/actions'
import initialState from '../initialState'

function employeeReducer(state = initialState, action) {

  let employees, position, id, employee
  switch (action.type) {

    case actions.ADD_EMPLOYEE:
      let employees = state.employees;
      let name = action.employee.name;
      let designation = action.employee.designation;
      let email = action.employee.email;
      let age = action.employee.age;
      let gender = action.employee.gender;
      let id = Math.floor((Math.random() * 100) + 1);
      employees.push({ id, name, designation, age, email, gender });
      return Object.assign({}, state, { activeId: id, employees: employees, currentEmployee: {} })

    case actions.EDIT_EMPLOYEE:
      for (let i = 0; i < state.employees.length; i++) {
        if (state.employees[i].id == action.employee.id) {
          position = i;
        }
      }
      id = action.employee.id;
      employee = action.employee;
      return Object.assign({}, state, { activeId: id, currentEmployee: employee, index: position, buttonAction: 'update' })



    case actions.DELETE_EMPLOYEE:
      for (let i = 0; i < state.employees.length; i++) {
        if (state.employees[i].id == action.employee.id) {
          position = i;
        }
      }
      id = action.employee.id;
      employees = state.employees;
      employees.splice(position, 1);
      return Object.assign({}, state, { employees: employees, currentEmployee: {}, activeId: id })

    case actions.UPDATE_EMPLOYEE:
      employees = state.employees;
      employees[state.index] = action.employee;
      return Object.assign({}, state, { employees: employees, currentEmployee: {}, activeId: '', buttonAction: 'add' })

    case actions.CANCEL:
      return Object.assign({}, state, { currentEmployee: {}, activeId: '', buttonAction: 'add' })

    default:
      return state
  }
}


export default employeeReducer