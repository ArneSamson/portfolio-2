import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackgroundEntities from "./BackgroundEntities";
import Page from "./Page";
import ContentDiv from "./ContentDiv";
import { HeadingTwoText, BodyText, BodyBoldText } from "../text/Text";

export default function ProjectDetailPage({ projects }) {
  const { slug } = useParams();
  const [project, setProject] = useState(() =>
    projects.find((project) => project.slug === slug)
  );
  const [loading, setLoading] = useState(!project);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!project) {
      fetch("/projects.json")
        .then((response) => response.json())
        .then((data) => {
          const fetchedProject = data.find((project) => project.slug === slug);
          if (fetchedProject) {
            setProject(fetchedProject);
          } else {
            setNotFound(true);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching projects data:", error);
          setNotFound(true);
          setLoading(false);
        });
    }
  }, [slug, project]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (notFound) {
    return (
      <Page>
        <div className='back-to-home'>
          <a href='/'>
            <BodyBoldText>Back to main page</BodyBoldText>
          </a>
          <hr className='birthdate-hr'></hr>
        </div>
        <ContentDiv>
          <div className='content-div-section'>
            <HeadingTwoText>Project not found</HeadingTwoText>
            <BodyText>
              Sorry, the project you are looking for does not exist.
            </BodyText>
          </div>
        </ContentDiv>
        <BackgroundEntities />
      </Page>
    );
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
