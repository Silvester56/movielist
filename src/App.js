import React from 'react';
import logo from './logo.svg';
import Bottom from './Bottom';
import Top from './Top';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Search } from './searchicon.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Logo/>
        <input type="text" placeholder="Rechercher un film"/>
        <Search className="search"/>
      </header>
      <Top/>
      <hr/>
      <Bottom/>
    </div>
  );
}

export default App;
