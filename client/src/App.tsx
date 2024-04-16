import React from 'react';
import './App.css';
import ViewToDo from './components/ViewToDo';
import Heading from './components/Heading';
import BoxCover from './components/BoxCover';

function App() {
  const API_URL = "http://localhost:3500"
  return (
    <div className="App">
      <BoxCover>
        <Heading/>
        <ViewToDo  API_URL = {API_URL}/>
      </BoxCover>
    </div>
  );
}

export default App;
