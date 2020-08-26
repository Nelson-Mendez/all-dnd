import React from 'react';
import {thefeats} from './feats.js';

export default function Feats() {
  return(
    <table> 
      <caption>Here be a list of feats!</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Prerequsites</th>
          <th>Description</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {thefeats.map(feat => (
          <tr>
            <td>{feat.name}</td>
            <td>{feat.prereq}</td>
            <td>{feat.description}</td>
            <td>{feat.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}