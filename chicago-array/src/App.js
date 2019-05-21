import React from 'react';
import './App.css';
import SignIn from "./components/authorization/SignIn";
import SignUp from "./components/authorization/SignUp";

function App() {
  return (
    <div className="App">
      <h1>It's WORKING!  It's WORKING!</h1>
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
