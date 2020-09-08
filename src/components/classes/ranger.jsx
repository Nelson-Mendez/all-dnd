import React from 'react';
import LevelTable from '../levelTable'
import Features from '../features'
import { rangerClass as info} from '../../data/ranger.js'

export default function ClassRanger() {
  return(
    <div className="classes__ranger">
      <h2>{info.name}</h2>
      <h4>{info.description}</h4>
      <LevelTable tableContents={info.table}/>
      <Features featureContents={info.class_features} />
    </div>
  )
}