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
        <p ref={aboutParagraphRef}>Full-Stack Developer</p>
        <h1 ref={aboutTitleRef}>Hunter Becton</h1>
      </AboutHeader>
      <AboutContent>
        <AboutLargeSection>
          <AboutContentTitle>About</AboutContentTitle>
          <AboutContentParagraph>
            I'm a full-stack JavaScript developer in Atlanta, GA. I love to
            build web apps with Next.js, React, Express, and MongoDB. I'm
            currently building Mattermix and create videos and tutorials on
            YouTube.
          </AboutContentParagraph>
        </AboutLargeSection>
        <AboutSmallSection>
          <AboutContentTitle>Technologies</AboutContentTitle>
          <AboutList>
            <AboutListItem>React</AboutListItem>
            <AboutListItem>Express</AboutListItem>
            <AboutListItem>MongoDB</AboutListItem>
            <AboutListItem>Next.js</AboutListItem>
            <AboutListItem>Tailwind</AboutListItem>
          </AboutList>
        </AboutSmallSection>
        <AboutSmallSection>
          <AboutContentTitle>Quick Links</AboutContentTitle>
          <AboutList linkColor="#FCD34D">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hunterbecton"
              alt="GitHub"
            >
              <AboutListItem>GitHub</AboutListItem>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/skillthrive"
              alt="YouTube"
            >
              <AboutListItem>YouTube</AboutListItem>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/hunterbecton"
              alt="Twitter"
            >
              <AboutListItem>Twitter</AboutListItem>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/huntergarrett/"
              alt="LinkedIn"
            >
              <AboutListItem>LinkedIn</AboutListItem>
            </a>
          </AboutList>
        </AboutSmallSection>
      </AboutContent>
    </AboutContainer>
  )
}

export default About
