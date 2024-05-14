import React, { useState } from "react";

export default function Page({ children }) {
  const [positions, setPositions] = useState([
    { top: 52, left: 658 },
    { top: 283, left: 221 },
    { top: 568, left: 713 },
  ]);

  return (
    <div className='page'>
      {children}
      {/* {positions.map((position, index) => (
        <div
          key={index}
          className='mask'
          style={{ top: position.top, left: position.left }}
          draggable
        ></div>
      ))} */}
    </div>
  );
}
