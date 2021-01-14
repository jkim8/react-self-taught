import React, { Component, useDebugValue } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>
          web
        </h1>
      </header>
    );
  }
}


class App extends Component {
  render(){
    return (
      <div className="App"> 
        <Subject></Subject>
      </div>
    );
  }
}

export default App;
