import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// styles & components
import './App.css';
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";
import PrimarySearchAppBar from "./components/ButtonAppBar";
// import PrivateRoute from './components/PrivateRoute';

// images
import ChicagoAOT from './assets/Chicago-AoT.png'


function App(props) {
  return (
    <div className="App">
      <section>
        <PrimarySearchAppBar />
      </section>
      <h1>Welcome to the Chicago Array of Things</h1>
      <section className="app-img">
        <img src={ChicagoAOT} alt="chicago array of things" />
      </section>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
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
