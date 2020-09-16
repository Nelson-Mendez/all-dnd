import React from 'react';
import Splash from './components/splash.jsx'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Classes from './components/classesTab.jsx'
import Races from './components/races.jsx'
import Spells from './components/spells.jsx'
import Backgrounds from './components/backgrounds.jsx'
import Feats from './components/feats.jsx'
import salt from './data/Salty.png'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Splash />
      <div className="content">
        <Tabs>
          <Tab eventKey="Classes" title="Classes" src={salt}>
            <Classes />
          </Tab>        
          
          <Tab eventKey="Races" title="Races">
            <Races />
          </Tab>        
          
          <Tab eventKey="Backgrounds" title="Backgrounds">
            <Backgrounds />
          </Tab>        
          
          <Tab eventKey="Spells" title="Spells">
            <Spells />
          </Tab>        
          
          <Tab eventKey="Feats"title="Feats">
            <Feats />
          </Tab>        
        </Tabs>
      </div>
    </div>
  )
}

export default App;
