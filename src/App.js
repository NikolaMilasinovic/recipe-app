import React from 'react';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RecipeList/>
    </div>
  );
}

export default App;
