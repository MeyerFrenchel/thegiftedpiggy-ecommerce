import React from 'react'
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const CanitePage = () => (
  <h1>CANITE PAGE</h1>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component ={HomePage} />
        <Route path='/canite' component={CanitePage} />
        </Switch>  
    </div>
  );
}

export default App;
