import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function LevelTable(props) {
  return(
    <table>

      <thead>
        <tr>
          {Object.keys(props.tableContents[0]).map((key, i) => {
            return <th key={i}>{key}</th>
          })}
        </tr>
      </thead>

      <tbody>
        {props.tableContents.map(level => (
          <tr key={level.Level}>
            {Object.values(level).map((value) => {
              return <td key={uuidv4()}>{value}</td>
            })}
          </tr>
        ))}
      </tbody>
      
    </table>
  )
}