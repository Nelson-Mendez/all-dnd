import React from 'react'

export default function Spellcasting(props) {
  return (
    <table className="classes__spellcasting" >
    <thead>
      <tr>
        {Object.keys(props.spellcasting[0]).map((key, i) => {
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