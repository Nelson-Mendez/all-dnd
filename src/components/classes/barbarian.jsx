import React from 'react';
import LevelTable from '../levelTable'
import Features from '../features'
import { barbarianClass as info} from '../../data/barbarian.js'

export default function ClassBarbarian() {
  return(
    <div className="classes__barbarian">
      <h2>{info.name}</h2>
      <h4>{info.description}</h4>
      <LevelTable tableContents={info.table}/>
      <Features featureContents={info.class_features} />
    </div>
  )
}