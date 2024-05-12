import React from "react";

export default function BackgroundEntities() {
  const entities = [];
  for (let i = 0; i < 300; i++) {
    entities.push(
      <div key={i} className='background-entity'>
        +
      </div>
    );
  }
  return <div className='background-entities'>{entities}</div>;
}
