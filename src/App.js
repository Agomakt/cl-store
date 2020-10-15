import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

// create components for handling with Route
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>  
);


// <HomePage />
function App() {
  
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
