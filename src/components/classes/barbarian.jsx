import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { classes } from '../../data/classes.js'


export default function Barbarian() {
  return(
    <div className="classes__barbarian">
      <h2>{classes.name}</h2>
      <thead>
        <tr>
          <th>Level</th>
          <th>Features</th>
          <th>Proficiency</th>
          <th>Rages</th>
          <th>Rage Bonus</th>
        </tr>
      </thead>
      
      {classes.table.map(level => (
        <tr>
          <td>{level.level}</td>
          <td>{level.features}</td>
          <td>{level.proficiency}</td>
          <td>{level.rages}</td>
          <td>{level.damage}</td>
        </tr>
      ))}
    </div>
  )
}