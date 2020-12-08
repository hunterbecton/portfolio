import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
        <Avatar>
          <Img fixed={data.avatar.childImageSharp.fixed} />
        </Avatar>
        <About />
        <Project
          color="#30BC72"
          title="Skillthrive"
          logo={data.skillthrive.childImageSharp.fixed}
          description={description1}
          technologies={["Gatsby", "MDX", "Node", "Express", "MongoDb"]}
          links={[
            { title: "Site", href: "https://www.skillthrive.com/" },
            { title: "YouTube", href: "https://www.youtube.com/skillthrive" },
          ]}
        />
        <Project
          color="#626DFF"
          title="Mattermix"
          logo={data.mattermix.childImageSharp.fixed}
          description={description2}
          technologies={["React", "Node", "Express", "MongoDb"]}
          links={[
            { title: "Site", href: "https://mattermix.vercel.app/" },
            {
              title: "React Repo",
              href: "https://github.com/hunterbecton/mattermix-react",
            },
            {
              title: "Node Repo",
              href: "https://github.com/hunterbecton/mattermix-node",
            },
          ]}
        />
        <Project
          color="#FF3377"
          title="Whamboard"
          logo={data.wham.childImageSharp.fixed}
          description={description3}
          technologies={["React", "Node", "Express", "MongoDb", "WebSockets"]}
          links={[
            { title: "Site", href: "https://whamboard.vercel.app/" },
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

const description2 = `I noticed a lot of time was being spent by marketing teams requesting social graphics from designers. To fix this I explored how to use React components to create editable social graphics that don't require someone to learn how to edit templates in Sketch or Figma.`

const description3 = `No more sitting in awkward silence during a video conference. Whamboard is a fun way to respond to your teammates or friends with sounds. Pick from default sounds or upload your own to create an interactive soundboard you can share and use in realtime.`
