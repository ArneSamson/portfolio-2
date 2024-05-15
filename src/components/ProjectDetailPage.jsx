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

  const { title, description, image } = project;

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
            <BodyText>{description}</BodyText>
          </div>
          <div className='project-detail'>
            <img src={image} alt={title} />
          </div>
        </ContentDiv>
        <BackgroundEntities />
      </Page>
    </>
  );
}
