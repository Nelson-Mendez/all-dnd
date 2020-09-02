import React from 'react';
import { thefeats } from './feats.js';

export default function Feats() {

  const [sortedField, setSortedField] = React.useState(null);
  
  let sortedFeats = [...thefeats];
  if (sortedField !== null) {
    sortedFeats.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  return(
    <table> 
      <caption>Here be a list of feats!</caption>

      <thead>
        <tr>
          <th><button type="button" onClick={() => setSortedField('name')}>Name</button></th>
          <th><button type="button" onClick={() => setSortedField('prereq')}>Prerequisites</button></th>
          <th><button type="button" onClick={() => setSortedField('description')}>Description</button></th>
          <th><button type="button" onClick={() => setSortedField('source')}>Source</button></th>
        </tr>
      </thead>

      <tbody>
        {sortedFeats.map(feat => (
          <tr key={feat.name}>
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