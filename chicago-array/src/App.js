import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";
// import './assets/Chicago-AoT.png'


function App(props) {
  return (
    <div className="App">
      {/* <img src="./assets/Chicago-AoT.png" alt="chicago array of things" /> */}
      <h1>Sign In or Sign Up</h1>
      <SignUp />
      <SignIn />
      <section>
        <h3>{props.error}</h3>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state,
})

// Material-ui
// DEVELOPMENT BRANCH
// doc jones
export default connect(
  mapStateToProps,
)(App);
