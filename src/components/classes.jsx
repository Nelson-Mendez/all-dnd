import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Barbarian from './classes/barbarian'
import './classes.scss'

export default function Classes() {
  return(
    <div className="classContent">
      <Tabs >
        <Tab eventKey="fighter" title="Fighter"> 
          <h2>The Fighter</h2>
          <p>Fighters share an unparalleled mastery with weapons and armor, 
            and a thorough knowledge of the skills of combat. They are well acquainted with death, 
            both meting it out and staring it defiantly in the face.</p>
        </Tab>
        <Tab eventkey="barbarian" title="Barbarian">
          <Barbarian />
        </Tab>
        <Tab eventKey="ranger" title="Ranger"> 
          <h2>The Ranger</h2>
          <p>Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of 
            the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.</p>
        </Tab>

        <Tab eventKey="monk" title="Monk"> 
          <h2>The Monk</h2>
          <p>Monks are united in their ability to magically harness the energy that flows in their bodies. 
            Whether channeled as a striking display of combat prowess or a subtler 
            focus of defensive ability and speed, this energy infuses all that a monk does.</p>
        </Tab>

        <Tab eventKey="paladin" title="Paladin"> 
          <h2>The Paladin</h2>
          <p>Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and 
            fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.</p>
        </Tab>
        
        <Tab eventKey="cleric" title="Cleric"> 
          <h2>The Cleric</h2>
          <p>Clerics are intermediaries between the mortal world and the distant planes of the gods. 
            As varied as the gods they serve, clerics strive to embody the handiwork of their deities. 
            No ordinary priest, a cleric is imbued with divine magic.</p>
        </Tab>

        <Tab eventKey="druid" title="Druid"> 
          <h2>The Druid</h2>
          <p>Whether calling on the elemental forces of nature or emulating the creatures of the animal world, 
            druids are an embodiment of nature's resilience, cunning, and fury. 
            They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.</p>
        </Tab>

        <Tab eventKey="bard" title="Bard"> 
          <h2>The Bard</h2>
          <p>Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, 
            demoralize foes, manipulate minds, create illusions, 
            and even heal wounds. The bard is a master of song, speech, and the magic they contain.</p>
        </Tab>

        <Tab eventKey="rogue" title="Rogue"> 
          <h2>The Rogue</h2>
          <p>Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. 
            They have a knack for finding the 
            solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone 
            of any successful adventuring party.</p>
        </Tab>

        <Tab eventKey="wizard" title="Wizard"> 
          <h2>The Wizard</h2>
          <p>Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave 
            of magic that 
            permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, 
            and much more.</p>
        </Tab>

        <Tab eventKey="warlock" title="Warlock"> 
          <h2>The Warlock</h2>
          <p>Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made 
            with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.</p>
        </Tab>

        <Tab eventKey="sorceror" title="Sorcerer"> 
          <h2>The Sorceror</h2>
          <p>Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly 
            influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.</p>
        </Tab>
      </Tabs>
    </div>
  )
}