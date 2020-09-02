import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Features(props) {
  return(
    <div className="features">
      <h3>Features</h3>
      {Object.entries(props.featureContents).map(([key, val]) => { return (
        <div className="features__card" key={uuidv4()}>
          <h4>{key}</h4>
          <p>{val}</p>
        </div>
      )})}
    </div>
  )
}