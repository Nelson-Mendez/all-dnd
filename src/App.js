import React from 'react';
import Splash from './components/splash.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Splash />
      <div className="content" >
        <aside className="sidebar">
          <ul className="sidebar__list">
            <li>Races</li>
            <li>Backgrounds</li>
            <li>Classes</li>
            <li>Spells</li>
            <li>Feats</li>
          </ul>
        </aside>  
        
        <input />
      </div>
    </div>
  )
}

export default App;
