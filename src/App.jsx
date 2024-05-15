import "./style.css";
import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Page from "./components/Page.jsx";
import Navbar from "./components/Navbar.jsx";
import TitleContainer from "./components/TitleContainer.jsx";
import {
  BodyText,
  BodyBoldText,
  HeadingText,
  HeadingTwoText,
} from "./text/Text.jsx";
import BackgroundEntities from "./components/BackgroundEntities.jsx";
import BottomFade from "./components/BottomFade.jsx";
import Coords from "./components/Coords.jsx";
import BirthDate from "./components/BirthDate.jsx";
import ContentDiv from "./components/ContentDiv.jsx";
import SkillsLogosDiv from "./components/SkillsLogosDiv.jsx";

import Scene from "./components/three/Scene.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <>
      <Navbar />
      <Page>
        <BirthDate>
          <BodyBoldText>09-12-2003</BodyBoldText>
        </BirthDate>
        <BackgroundEntities />
        <Scene />
        <TitleContainer>
          <HeadingText>embrace</HeadingText>
          <HeadingText>drive</HeadingText>
          <HeadingText>develop</HeadingText>
        </TitleContainer>
        <BottomFade />
        <Coords>
          <BodyBoldText>N 51.023° E 4.484°</BodyBoldText>
        </Coords>
      </Page>

      <Page>
        <ContentDiv>
          <div className='content-div-section'>
            <HeadingTwoText>about</HeadingTwoText>
            <BodyText
              style={{
                maxWidth: "500px",
              }}
            >
              lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum
              doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit
              amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem
              ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler
              sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet
              lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum
              doler sit amet.
            </BodyText>
          </div>

          <div className='content-div-main-image'></div>
        </ContentDiv>
        <BackgroundEntities />
      </Page>

      <Page>
        <ContentDiv reverse>
          <div className='content-div-section'>
            <HeadingTwoText>professional</HeadingTwoText>
            <BodyText
              style={{
                maxWidth: "500px",
              }}
            >
              lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum
              doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit
              amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem
              ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler
              sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet
              lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum
              doler sit amet.
            </BodyText>
          </div>
          <SkillsLogosDiv />
        </ContentDiv>
        <BackgroundEntities />
      </Page>

      <Page>
        <BackgroundEntities />
      </Page>

      <Page>
        <BackgroundEntities />
      </Page>
    </>
  );
}

root.render(<App />);
