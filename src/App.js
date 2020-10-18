import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

// create components for handling with Route
const HatsPage = () => (
  <div>
    <Link to='/'>HomePage</Link>
    <h1>HATS PAGE</h1>
  </div>  
);


// <HomePage />

function App() {
  
  return (
    <div>
      
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
