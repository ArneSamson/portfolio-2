import "./style.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import Page from "./components/Page.jsx";
import TitleContainer from "./components/TitleContainer.jsx";
import { BodyText, HeadingText } from "./text/Text.jsx";
import BackgroundEntities from "./components/BackgroundEntities.jsx";
import BottomFade from "./components/BottomFade.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <>
      <Page>
        <BackgroundEntities />
        <TitleContainer>
          <HeadingText>embrace</HeadingText>
          <HeadingText>drive</HeadingText>
          <HeadingText>develop</HeadingText>
        </TitleContainer>
        <BottomFade />
      </Page>
      <Page>
        <BackgroundEntities />
        <TitleContainer>
          <HeadingText>embrace</HeadingText>
          <HeadingText>drive</HeadingText>
          <HeadingText>develop</HeadingText>
        </TitleContainer>
        <BottomFade />
      </Page>
    </>
  );
}

root.render(<App />);
