import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from './actions';
import { Route } from 'react-router-dom';

//Components
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";
import Select from "./components/selection/SelectView";
import PrivateRoute from './components/PrivateRoute';



// Material UI Components
import NavBar from "./components/Navigation/NavBar";

// styles
import './App.css';

// images
import ChicagoAOT from './assets/cityofdata.jpg'


class App extends React.Component {

  componentDidMount(){
    this.props.checkAuth()
  }

  render(){
  return (
    <div className="App">
      <section>
        <NavBar />
      </section>
      {!this.props.isLoggedIn &&(
        <section className="app-img">
          <img src={ChicagoAOT} alt="chicago array of things" />
        </section>
        )
      } 
      <Route path="/signup" component={SignUp} />
      <Route exact path="/" component={SignIn} />
      <PrivateRoute exact path="/selectors" component={Select} />
        {/* <section>
          <h3>{props.message || props.error}</h3>
        </section> */}
    </div>
  );
}
}

const mapStateToProps = state => ({
  ...state,
})


export default connect(
  mapStateToProps,
  { checkAuth }
)(App);
