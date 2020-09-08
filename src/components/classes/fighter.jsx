import React from 'react';
import LevelTable from '../levelTable'
import Features from '../features'
import { fighterClass as info} from '../../data/fighter.js'

export default function ClassFighter() {
  return(
    <div className="classes__fighter">
      <h2>{info.name}</h2>
      <h4>{info.description}</h4>
      <LevelTable tableContents={info.table}/>
      <Features featureContents={info.class_features} />
    </div>
  )
}