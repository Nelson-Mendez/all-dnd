import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './races.scss'

export default function Races() {
  return(
    <div className="racesContent" >
      <Tabs >
        <Tab eventKey="common" title="Common">
          <ul className="races__common">
            <li>Dragonborn</li>
            <li>Dwarf</li>
            <li>Gnome</li>
            <li>Elf</li>
            <li>Half-Elf</li>
            <li>Half-Orc</li>
            <li>Halfling</li>
            <li>Human</li>
            <li>Tiefling</li>
          </ul>
        </Tab>

        <Tab eventKey="exotic" title="Exotic">
          <ul>
            <li>Aarakocra</li>
            <li>Aasimar</li>
            <li>Changeling</li>
            <li>Firbolg</li>
            <li>Genasi</li>
            <li>Gith</li>
            <li>Goliath</li>
            <li>Kalashtar</li>
            <li>Kenku</li>
            <li>Leonin</li>
            <li>Loxodon</li>
            <li>Satyr</li>
            <li>Shifter</li>
            <li>Simic Hybrid</li>
            <li>Tabaxi</li>
            <li>Tortle</li>
            <li>Triton</li>
            <li>Vedalken</li>
            <li>Warforged</li>
          </ul>
        </Tab>

        <Tab eventKey="monster" title="Monster">
          <ul>
            <li>Bugbear</li>
            <li>Centaur</li>
            <li>Goblin</li>
            <li>Grung</li>
            <li>Hobgoblin</li>
            <li>Kobold</li>
            <li>Lizardfolk</li>
            <li>Minotaur</li>
            <li>Orc</li>
            <li>Yuan-Ti Pureblood</li>
          </ul>
        </Tab>
      </Tabs>
    </div>
  )
}