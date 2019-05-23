import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

//Components
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";
import Select from "./components/selection/SelectView";


// Material UI Components
import NavBar from "./components/Navigation/NavBar";
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
      </section>
      {/* <h1>Welcome to the Chicago Array of Things</h1> */}
      {!props.isLoggedIn && (
        <section className="app-img">
          <img src={ChicagoAOT} alt="chicago array of things" />
        </section>
      )}
      <Route path="/signup" component={SignUp} />
      <Route exact path="/" component={SignIn} />
      <PrivateRoute exact path="/selectors" component={Select} />
        {/* <section>
          <h3>{props.message || props.error}</h3>
        </section> */}
    </div>
  );
}

const mapStateToProps = state => ({
  ...state,
})


export default connect(
  mapStateToProps,
)(App);
