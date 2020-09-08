import React from 'react';
import { backgroundList } from '../data/backgrounds';

export default function Backgrounds() {

  const [sortedField, setSortedField] = React.useState(null);
  
  let sortedBackgrounds = [...backgroundList];
  if (sortedField !== null) {
    sortedBackgrounds.sort((a, b) => {
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
      <caption>Heres a list of all the backgrounds</caption>

      <thead>
        <tr>
          <th><button type="button" onClick={() => setSortedField('Name')}>Name</button></th>
          <th><button type="button" onClick={() => setSortedField('Languages')}>languages</button></th>
          <th><button type="button" onClick={() => setSortedField('Tools')}>Tools</button></th>
          <th><button type="button" onClick={() => setSortedField('Skills')}>Skills</button></th>
          <th><button type="button" onClick={() => setSortedField('Source')}>Source</button></th>
        </tr>
      </thead>

      <tbody>
      {sortedBackgrounds.map(background => (
          <tr key={background.Name}>
            <td>{background.Name}</td>
            <td>{background.Languages}</td>
            <td>{background.Tools}</td>
            <td>{background.Skills}</td>
            <td>{background.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}