import styled from "styled-components"

export const AboutContainer = styled.section`
  position: relative;
  grid-column: 2 / span 12;
  padding: 7.5rem;
  background-color: ${props => props.theme.colors.black2};

  @media ${props => props.theme.breakpoints.m} {
    padding: 5rem;
    grid-column: 1 / span 8;
  }

  @media ${props => props.theme.breakpoints.xxs} {
    padding: 1rem;
  }
`

export const AboutHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${props => `translate(4.5rem, -${props.offset}px)`};

  p {
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.white3};
    text-transform: uppercase;
  }

  h1 {
    font-family: ${props => props.theme.fonts.title};
    font-size: 5rem;
    font-weight: 400;
    color: ${props => props.theme.colors.white1};
  }

  @media ${props => props.theme.breakpoints.m} {
    p {
      font-size: 0.825rem;
    }

    h1 {
      font-size: 4rem;
    }
  }

  @media ${props => props.theme.breakpoints.s} {
    p {
      font-size: 0.75rem;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media ${props => props.theme.breakpoints.xxs} {
    transform: ${props => `translate(1rem, -${props.offset}px)`};
  }
`

export const AboutContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

export const AboutContentTitle = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white2};
  margin-bottom: 1rem;
`

export const AboutList = styled.ul`
  list-style-type: "–  ";

  a {
    display: block;
    width: fit-content;
  }

  a li {
    color: ${props => props.linkColor || props.theme.colors.blue1};
  }

  a li::marker {
    color: ${props => props.theme.colors.white3};
  }

  a li:hover,
  a li:focus {
    text-decoration: underline;
  }
`

export const AboutListItem = styled.li`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${props => props.theme.colors.white3};
`

export const AboutContentParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${props => props.theme.colors.white3};
`

export const AboutLargeSection = styled.div`
  flex: 3 1 15rem;
  padding: 1rem;
`

export const AboutSmallSection = styled.div`
  flex: 1 1 auto;
  padding: 1rem;
`
