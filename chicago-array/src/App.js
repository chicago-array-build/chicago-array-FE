import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

//Components
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";
import Selectors from "./components/Selectors";

// Material UI Components
import NavBar from "./components/Navigation/NavBar";
import SignOut from "./components/authorization/SignOut";
// import Hamburger from "./components/Navigation/Hamburger";
import PrivateRoute from './components/PrivateRoute';

// styles
import './App.css';

// images
import ChicagoAOT from './assets/Chicago-AoT.png'


function App(props) {
  return (
    <div className="App">
      <section>
        <NavBar />
        {/* <Hamburger /> */}
        <SignOut />
      </section>
      {/* <h1>Welcome to the Chicago Array of Things</h1> */}
      <section className="app-img">
        <img src={ChicagoAOT} alt="chicago array of things" />
      </section>
      <Route path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/selectors" component={Selectors} />
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
