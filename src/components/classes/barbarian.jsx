import React from 'react';
import LevelTable from '../levelTable'
import Features from '../features'


export default function ClassBarbarian(props) {
  return(
    <div className="classes__barbarian">
      <h2>{props.classInfo.name}</h2>
      <h4>{props.classInfo.description}</h4>
      <LevelTable tableContents={props.classInfo.table}/>
      <Features featureContents={props.classInfo.class_features} />
    </div>
  )
}