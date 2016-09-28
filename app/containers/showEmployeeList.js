import { connect } from 'react-redux'
import {editEmployee, deleteEmployee} from '../actions'
import actions  from '../actions/actions'
import List from '../components/List'


const mapStateToProps = (state) => {
  return {
    employees: state.employeeReducer.employees,
    activeId: state.employeeReducer.activeId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditEmployee: (employee) => {
      dispatch(editEmployee(employee))
    },
    onDeleteEmployee: (employee) => {
      dispatch(deleteEmployee(employee))
    }
  }
}

const showEmployeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default showEmployeeList