import React from 'react';

import logo from '../../assets/logo.svg';
import './App.css';

import TodoList from '../TodoApp/todoList';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>DEV MODE</p>
  </header>
);

const App = () => (
  <div className="App">
    <Header />
    <TodoList />
  </div>
);

export default App;
