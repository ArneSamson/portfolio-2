import "./style.css";
import React, { useRef, useEffect, useState } from "react";

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
import Projects from "./components/Projects.jsx";

import Scene from "./components/three/Scene.jsx";

import useWindowSize from "./helper/useWindowSizeHelper.jsx";

export default function MainPage() {
  const pageRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = useWindowSize();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = pageRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    pageRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pageRefs]);

  return (
    <>
      {!isSmallScreen && (
        <Navbar pageRefs={pageRefs} activeIndex={activeIndex} />
      )}
      <Page ref={pageRefs[0]} extraClass='landing-page'>
        <BirthDate>
          <BodyBoldText>09-12-2003</BodyBoldText>
        </BirthDate>
        <BackgroundEntities />
        {!isSmallScreen && <Scene />}

        <BottomFade />
        <TitleContainer>
          <HeadingText>embrace</HeadingText>
          <HeadingText>drive</HeadingText>
          <HeadingText>develop</HeadingText>
        </TitleContainer>
        <Coords>
          <BodyBoldText>N 51.023° E 4.484°</BodyBoldText>
        </Coords>
      </Page>

      <Page ref={pageRefs[1]}>
        <ContentDiv>
          <div className='content-div-section'>
            <HeadingTwoText>about</HeadingTwoText>
            <BodyText
              style={{
                maxWidth: "500px",
              }}
            >
              Hey! I'm Arne, an enthusiastic creative/frontend developer based
              in Mechelen. My passion for both 3D design and web development has
              driven me to develop a broad set of skills in both disciplines.{" "}
              <br /> <br />
              With a strong background in Digital Experience Design, I'm
              fascinated by the possibilities of combining creative design with
              cutting-edge web technologies. My love for 3D design has inspired
              me to create complex and engaging digital experiences that are
              both functional and aesthetic. With extensive web development
              skills, including expertise in React and Three.js, I am determined
              to find innovative solutions that exceed expectations and continue
              to captivate users.
            </BodyText>
          </div>

          <div className='content-div-main-image'></div>
        </ContentDiv>
        <BackgroundEntities />
      </Page>

      <Page ref={pageRefs[2]}>
        <ContentDiv reverse>
          <div className='content-div-section'>
            <HeadingTwoText>professional</HeadingTwoText>
            <BodyText
              style={{
                maxWidth: "500px",
              }}
            >
              With a strong focus on React-Three-Fiber and a passion for 3D
              design, I deliver high-quality digital solutions that push the
              boundaries of user experiences. My skills also encompass frontend
              frameworks like React.js and Vue.js, as well as 3D modeling with
              Blender and Three.js. <br /> <br />
              Additionally, I am proficient in setting up backend solutions with
              MongoDB and Express.js API, while managing projects using
              platforms like GitHub. My commitment to quality and continuous
              improvement drives me to develop custom web applications that meet
              the needs of my clients and users. <br /> <br />
              With a focus on innovation and efficiency, I am determined to
              exceed expectations and add value to every project I work on.
            </BodyText>
          </div>
          <SkillsLogosDiv />
        </ContentDiv>
        <BackgroundEntities />
      </Page>

      <Page ref={pageRefs[3]}>
        <ContentDiv>
          <div className='content-div-section'>
            <HeadingTwoText>projects</HeadingTwoText>
            <Projects />
          </div>
        </ContentDiv>
        <BackgroundEntities />
      </Page>
      {/* 
      <Page>
        <BackgroundEntities />
      </Page> */}
    </>
  );
}
