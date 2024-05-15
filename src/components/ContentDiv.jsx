import React, { useEffect, useState } from "react";

export default function ContentDiv({ children, reverse }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div
      className='content-div'
      style={
        windowWidth < 900
          ? { flexDirection: "column" }
          : reverse
          ? { flexDirection: "row-reverse" }
          : {}
      }
    >
      {children}
    </div>
  );
}
