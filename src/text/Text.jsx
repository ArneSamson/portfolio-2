import React from "react";

export function BodyText({ children }) {
  return <p>{children}</p>;
}

export function BodyBoldText({ children }) {
  return (
    <p>
      <strong>{children}</strong>
    </p>
  );
}

export function HeadingText({ children }) {
  return <h1>{children}</h1>;
}
