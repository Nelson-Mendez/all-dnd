import React from 'react';
import { listofspells } from '../data/spellList';

export default function SpellList() {

  const [sortedField, setSortedField] = React.useState(null);
  
  let sortedSpells = [...listofspells];
  if (sortedField !== null) {
    sortedSpells.sort((a, b) => {
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
      <caption>Here be a list of spells!</caption>

      <thead>
        <tr>
          <th><button type="button" onClick={() => setSortedField('name')}>Name</button></th>
          <th><button type="button" onClick={() => setSortedField('level')}>Level</button></th>
          <th><button type="button" onClick={() => setSortedField('school')}>School</button></th>
          <th><button type="button" onClick={() => setSortedField('time to cast')}>Time to Cast</button></th>
          <th><button type="button" onClick={() => setSortedField('concentration')}>Concentration</button></th>
          <th><button type="button" onClick={() => setSortedField('ritual')}>Ritual</button></th>
          <th><button type="button" onClick={() => setSortedField('description')}>Description</button></th>
          <th><button type="button" onClick={() => setSortedField('source')}>Source</button></th>
        </tr>
      </thead>

      <tbody>
        {sortedSpells.map(spell => (
          <tr key={spell.name}>
            <td>{spell.name}</td>
            <td>{spell.level}</td>
            <td>{spell.school}</td>
            <td>{spell.castTime}</td>
            <td>{spell.concentration}</td>
            <td>{spell.ritual}</td>
            <td>{spell.description}</td>
            <td>{spell.source}</td>
          </tr>
        ))}
      </tbody>

    </table>
  )
}