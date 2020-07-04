import React, { Component, Fragment } from 'react'
import Departments from './components/Departaments';
import Users from './components/Users';
import './index.css'

const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: message => { },
  hideLoading: () => { }
})
function App() {
  return (
    <Fragment>
      <Users />
      <Departments />
    </Fragment>
  );
}

export default App;
