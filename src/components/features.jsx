import React from 'react';

export default function Features(props) {
  return(
    <div className="features">
      <h3>Features</h3>
      {Object.entries(props.featureContents).map(([key, val]) => { return (
        <div className="features__card">
          <h4>{key}</h4>
          <p>{val}</p>
        </div>
      )})}
    </div>
  )
}