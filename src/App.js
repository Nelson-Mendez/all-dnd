import React from 'react';
import Splash from './components/splash.jsx'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Classes from './components/classes.jsx'
import Races from './components/races.jsx'
import salt from './data/Salty.png'
import './App.scss';

function App() {
  return (
    <div>
      <Splash />
      <div className="content">
        <Tabs mountOnEnter="true">
          <Tab eventKey="Classes" title="Classes" src={salt}>
            <Classes />
          </Tab>        
          
          <Tab eventKey="Races" title="Races">
            <Races />
          </Tab>        
          
          <Tab eventKey="Backgrounds" title="Backgrounds">
            <p>heres a thing</p>
          </Tab>        
          
          <Tab eventKey="Spells" title="Spells">
            <p>heres a thing</p>
          </Tab>        
          
          <Tab eventKey="Feats"title="Feats">
            <p>heres a thing</p>
          </Tab>        
        </Tabs>
      </div>
    </div>
  )
}

export default App;
