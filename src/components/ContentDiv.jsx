import React from "react";

export default function ContentDiv({ children, reverse }) {
  return (
    <div
      className='content-div'
      style={reverse ? { flexDirection: "row-reverse" } : {}}
    >
      {children}
    </div>
  );
}
