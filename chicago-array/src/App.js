import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './App.css';
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";
// import PrivateRoute from './components/PrivateRoute';
// import './assets/Chicago-AoT.png'


function App(props) {
  return (
    <div className="App">
      {/* <img src="./assets/Chicago-AoT.png" alt="chicago array of things" /> */}
      <h1>Sign In or Sign Up</h1>
      <Route path="/" component={SignUp} />
      <Route path="/" component={SignIn} />
      {/* <PrivateRoute exact path="/selectors" component={selections} /> */}
      <section>
        <h3>{props.error}</h3>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state,
})


export default connect(
  mapStateToProps,
)(App);
