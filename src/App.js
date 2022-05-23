import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/header'
import Modal1 from './components/modal1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Modal1 />
      </div>
    );
  }
}

export default App;
