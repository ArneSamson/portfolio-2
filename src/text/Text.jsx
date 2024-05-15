import React from "react";

export function BodyText({ children, style }) {
  return <p style={style}>{children}</p>;
}

export function BodyBoldText({ children, style }) {
  return (
    <p style={style}>
      <strong>{children}</strong>
    </p>
  );
}

export function HeadingText({ children, style }) {
  return <h1 style={style}>{children}</h1>;
}

export function HeadingTwoText({ children, style }) {
  return <h2 style={style}>{children}</h2>;
}
