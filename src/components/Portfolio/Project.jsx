import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import {
  AboutContainer,
  AboutContent,
  AboutLargeSection,
  AboutContentTitle,
  AboutContentParagraph,
  AboutSmallSection,
  AboutList,
  AboutListItem,
} from "./Elements"

const Project = ({ color, title, logo, description, technologies, links }) => {
  return (
    <>
      <ProjectHeader headerBackground={color}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImage>
          <Img fixed={logo} />
        </ProjectImage>
      </ProjectHeader>
      <ProjectContainer>
        <ProjectContent>
          <ProjectLargeSection>
            <ProjectContentTitle>Description</ProjectContentTitle>
            <ProjectContentParagraph>{description}</ProjectContentParagraph>
          </ProjectLargeSection>
          <ProjectSmallSection>
            <ProjectContentTitle>Technologies</ProjectContentTitle>
            <ProjectList>
              {technologies.map((technology, i) => (
                <ProjectListItem key={i}>{technology}</ProjectListItem>
              ))}
            </ProjectList>
          </ProjectSmallSection>
          <ProjectSmallSection>
            <ProjectContentTitle>Links</ProjectContentTitle>
            <ProjectList linkColor={color}>
              {links.map((link, i) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                  alt={link.title}
                  key={i}
                >
                  <ProjectListItem>{link.title}</ProjectListItem>
                </a>
              ))}
            </ProjectList>
          </ProjectSmallSection>
        </ProjectContent>
      </ProjectContainer>
    </>
  )
}

export default Project

const ProjectHeader = styled.header`
  grid-column: 2 / span 12;
  display: flex;
  background-color: ${props =>
    props.headerBackground || props.theme.colors.black1};
  padding: 4.5rem 4.5rem 0 4.5rem;

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 1 / span 8;
  }

  @media ${props => props.theme.breakpoints.xxs} {
    padding: 1rem 1rem 0 1rem;
  }
`
const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.title};
  font-size: 3.375rem;
  font-weight: 400;
  color: ${props => props.theme.colors.white1};
  align-self: flex-end;
  word-wrap: break-word;

  @media ${props => props.theme.breakpoints.m} {
    font-size: 2.825rem;
  }

  @media ${props => props.theme.breakpoints.s} {
    font-size: 2.125rem;
  }
`

const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  background-color: ${props => props.theme.colors.black1};
  margin-left: auto;

  @media ${props => props.theme.breakpoints.s} {
    display: none;
  }
`

const ProjectContainer = styled(AboutContainer)``

const ProjectContent = styled(AboutContent)``

const ProjectLargeSection = styled(AboutLargeSection)``

const ProjectSmallSection = styled(AboutSmallSection)``

const ProjectContentTitle = styled(AboutContentTitle)``

const ProjectContentParagraph = styled(AboutContentParagraph)``

const ProjectList = styled(AboutList)``

const ProjectListItem = styled(AboutListItem)``
