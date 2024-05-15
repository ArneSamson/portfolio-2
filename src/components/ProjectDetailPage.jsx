import React from "react";
import { useParams } from "react-router-dom";

import BackgroundEntities from "./BackgroundEntities";
import Page from "./Page";
import ContentDiv from "./ContentDiv";
import { HeadingTwoText, BodyText, BodyBoldText } from "../text/Text";

export default function ProjectDetailPage({ projects }) {
  const { slug } = useParams(); // Get the slug parameter from the URL

  // Find the project with the matching slug
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    //reroute to home page if project is not found
    window.location.href = "/";
  }

  const { title, short, hero, long, images } = project;

  return (
    <>
      <Page>
        <div className='back-to-home'>
          <a href='/'>
            <BodyBoldText>Back to main page</BodyBoldText>
          </a>
          <hr className='birthdate-hr'></hr>
        </div>
        <ContentDiv>
          <div className='content-div-section'>
            <HeadingTwoText>{title}</HeadingTwoText>
            <BodyText>{long}</BodyText>
          </div>
          <div className='project-detail'>
            <img src={hero} alt={title} />
          </div>
        </ContentDiv>
        <BackgroundEntities />
      </Page>
      <Page>
        <div className='project-detail-images'>
          {images
            ? images.map((image, index) => (
                <img key={index} src={image} alt={title} />
              ))
            : null}
        </div>
      </Page>
    </>
  );
}
