import React from 'react';
import LevelTable from './levelTable'
import Features from './features'
// import Spellcasting from './spellcasting'

export default function Class(props) {
  return(
    <div className={"classes"}>
      <h2>{props.info.name}</h2>
      <h4>{props.info.description}</h4>
      {/* {props.info.spellcasting && <Spellcasting info={props.info.spellcasting}>} */}
      <LevelTable tableContents={props.info.table}/>
      <Features featureContents={props.info.class_features} />
    </div>
  )
}