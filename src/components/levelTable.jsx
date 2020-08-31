import React from 'react';


export default function LevelTable(props) {
  return(
    <table>
      <thead>
        <tr>
          {Object.keys(props.tableContents[0]).map(key => {
            return <th>{key}</th>
          })}
        </tr>
      </thead>
      
      {props.tableContents.map(level => (
        <tr>
          {Object.values(level).map(value => {
            return <td>{value}</td>
          })}
        </tr>
      ))}
    </table>
  )
}