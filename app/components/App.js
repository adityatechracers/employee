import React from 'react';
import ShowEmployeeList from '../containers/showEmployeeList';
import ShowForm from '../containers/showForm';

const App = React.createClass({

  //render List and Form component
  render() {
    return (
      <div>
        <div className="col-md-3">
          <div className="sidebar affix">
            <ShowForm />
          </div>
        </div>
        <div className="col-md-9" >
          <ShowEmployeeList />
        </div>
      </div>
    )
  }

});

export default App;


