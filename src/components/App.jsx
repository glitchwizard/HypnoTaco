import React, { Component } from 'react';
import logo from '../assets/taco3.png';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/tacos'>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
            <p>
              Run. Get that taco.
            </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{

  }
}

export default App;
