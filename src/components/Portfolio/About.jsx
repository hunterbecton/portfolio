import React, { useRef, useEffect, useState } from "react"

import useWindowSize from "../../hooks/useWindowSize"
import {
  AboutContainer,
  AboutHeader,
  AboutContent,
  AboutLargeSection,
  AboutContentTitle,
  AboutContentParagraph,
  AboutSmallSection,
  AboutList,
  AboutListItem,
} from "./Elements"

const About = () => {
  const size = useWindowSize()

  const aboutTitleRef = useRef(null)

  const aboutParagraphRef = useRef(null)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const paragraphHeight = aboutParagraphRef.current.offsetHeight

    const titleHeight = aboutTitleRef.current.offsetHeight / 2

    setOffset(titleHeight + paragraphHeight)
  }, [aboutTitleRef, aboutParagraphRef, size])

  return (
    <AboutContainer>
      <AboutHeader offset={offset}>
        <p ref={aboutParagraphRef}>Full Stack Developer</p>
        <h1 ref={aboutTitleRef}>Hunter Becton</h1>
      </AboutHeader>
      <AboutContent>
        <AboutLargeSection>
          <AboutContentTitle>About</AboutContentTitle>
          <AboutContentParagraph>
            I'm a full stack JavaScript developer in Atlanta, GA. I love to
            build apps and websites with Gatsby, React, Node, Express, and
            MongoDB. I also create videos and tutorials on YouTube for those
            wanting to learn web design and development.
          </AboutContentParagraph>
        </AboutLargeSection>
        <AboutSmallSection>
          <AboutContentTitle>Technologies</AboutContentTitle>
          <AboutList>
            <AboutListItem>React</AboutListItem>
            <AboutListItem>Node</AboutListItem>
            <AboutListItem>Express</AboutListItem>
            <AboutListItem>MongoDB</AboutListItem>
            <AboutListItem>Styled Components</AboutListItem>
            <AboutListItem>Figma</AboutListItem>
          </AboutList>
        </AboutSmallSection>
        <AboutSmallSection>
          <AboutContentTitle>Contact</AboutContentTitle>
          <AboutList>
            <AboutListItem>Web Development</AboutListItem>
            <AboutListItem>Web Design</AboutListItem>
            <AboutListItem>Content Creation</AboutListItem>
            <AboutListItem>YouTube Sponsorships</AboutListItem>
          </AboutList>
        </AboutSmallSection>
      </AboutContent>
    </AboutContainer>
  )
}

export default About
