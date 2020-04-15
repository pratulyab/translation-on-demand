import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar'
import Editor from './Components/Editor'

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Editor/>
    </div>
  );
}

export default App;
