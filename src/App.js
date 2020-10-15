import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

// create components for handling with Route
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>  
);



function App() {
  return (
    <div>
      <HomePage />
    
    </div>
  );
}

export default App;
