import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Grid from "../components/Layout/Grid"
import About from "../components/Portfolio/About"
import Project from "../components/Portfolio/Project"
import Seo from "../components/Seo/Seo"

const Home = ({ data }) => {
  return (
    <>
      <Seo />
      <Grid>
        <About />
        <Project
          color="#4F46E5"
          title="Mattermix"
          logo={data.mattermix.childImageSharp.fixed}
          description={description2}
          technologies={["React", "Express", "MongoDB"]}
          links={[{ title: "Site", href: "https://mattermix.com" }]}
        />
        <Project
          color="#30BC72"
          title="Skillthrive"
          logo={data.skillthrive.childImageSharp.fixed}
          description={description1}
          technologies={["Gatsby", "MDX", "Node", "Express", "MongoDB"]}
          links={[
            { title: "Site", href: "https://www.skillthrive.com/" },
            { title: "YouTube", href: "https://www.youtube.com/skillthrive" },
          ]}
        />
        <Project
          color="#FF3377"
          title="Whamboard"
          logo={data.wham.childImageSharp.fixed}
          description={description3}
          technologies={["React", "Node", "Express", "MongoDB", "WebSockets"]}
          links={[
            { title: "Site", href: "https://whamboard.com" },
            {
              title: "React Repo",
              href: "https://github.com/hunterbecton/wham-react",
            },
            {
              title: "Node Repo",
              href: "https://github.com/hunterbecton/wham-node-example",
            },
          ]}
        />
        <Project
          color="#FF7E62"
          title="Dog Adoption Bot"
          logo={data.dog.childImageSharp.fixed}
          description={description4}
          technologies={["Node", , "Twitter API"]}
          links={[
            {
              title: "Twitter Bot",
              href: "https://twitter.com/ATLDogAdoptions",
            },
            {
              title: "Repo",
              href: "https://github.com/hunterbecton/dog-adoption-bot",
            },
            { title: "Tutorial", href: "https://youtu.be/lco4xCX85Cw" },
          ]}
        />
      </Grid>
    </>
  )
}

export default Home

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "hunter-avatar.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    skillthrive: file(relativePath: { eq: "skillthrive-logo.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    dog: file(relativePath: { eq: "dog-emoji.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    mattermix: file(relativePath: { eq: "mattermix-logo.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    wham: file(relativePath: { eq: "wham-logo.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

const Avatar = styled.div`
  grid-column: 2 / span 12;
  display: flex;
  z-index: -100;
  transform: translateY(1rem);
  padding: 0 3rem;
  filter: drop-shadow(-2px 4px 7px rgba(26, 30, 33, 0.7));

  & > div {
    margin-left: auto;
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 1 / span 8;
  }

  @media ${props => props.theme.breakpoints.s} {
    display: none;
  }
`

const description1 = `What started as a fun way to share my knowledge and explore new topics has now grown into a YouTube channel with nearly 40K subscribers. I've recently launched a new version of the site that features comprehensive written guides that are paired with video and code.`

const description4 = `I wanted to explore the Twitter API by building a Twitter bot in Node, but I wanted the bot to do something good. I decided to work with the PetFinder API to search dogs within the Atlanta area that are up for adoption and share one every hour.`

const description2 = `Mattermix is my current business I'm working on full-time. Mattermix makes it easy for anyone to create images from HTML and CSS using a browser-based editor and API.`

const description3 = `No more sitting in awkward silence during a video conference. Whamboard is a fun way to respond to your teammates or friends with sounds. Pick from default sounds or upload your own to create an interactive soundboard you can share and use in realtime.`
