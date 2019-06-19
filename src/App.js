import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './Components/Login';
import ProfilePage from './Components/ProfilePage'; 

import './App.css';
import './Styles/App.scss';

function App() {
  return (
    <div className="App">
     <HashRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/ProfilePage" component={ProfilePage} />
    </HashRouter >
    </div>
  );
}

export default App;
