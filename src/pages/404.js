import React from "react"
import styled from "styled-components"

import Grid from "../components/Layout/Grid"
import MaxWidthSection from "../components/Layout/MaxWidthSection"

const NotFoundContainer = styled(MaxWidthSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  & > p {
    color: ${props => props.theme.colors.white3};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
`

const NotFound = () => {
  return (
    <Grid>
      <NotFoundContainer>
        <p>This page doesn't exist.</p>
      </NotFoundContainer>
    </Grid>
  )
}

export default NotFound
