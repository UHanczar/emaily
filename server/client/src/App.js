import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(data => console.log('Data', data));
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href='/auth/google'>Sign In With Google</a>
      </div>
    );
  }
}

export default App;
