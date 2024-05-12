import "./style.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import Page from "./components/Page.jsx";
import { BodyText, HeadingText } from "./text/Text.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <Page>
      <HeadingText>My App</HeadingText>
      <BodyText>Hello, world!</BodyText>
    </Page>
  );
}

root.render(<App />);
