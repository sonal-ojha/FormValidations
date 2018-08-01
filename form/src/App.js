import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import { ToastContainer } from 'react-toastify'; 

class App extends Component {
  render() {
    return (
      <div className="">
        <Form />
        <ToastContainer autoClose={2000}/>
      </div>
    );
  }
}

export default App;
