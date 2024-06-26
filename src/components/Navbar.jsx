import React from "react";

export default function Navbar({ pageRefs, activeIndex }) {
  const scrollToPage = (index) => {
    if (pageRefs[index] && pageRefs[index].current) {
      pageRefs[index].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='navbar'>
      {pageRefs.map((_, index) => (
        <div
          key={index}
          className={`navbar-bar ${activeIndex === index ? "active" : ""}`}
          onClick={() => scrollToPage(index)}
        ></div>
      ))}
    </div>
  );
}
