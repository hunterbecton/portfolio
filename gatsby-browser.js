import React from "react"
import { ThemeProvider } from "styled-components"

import Theme from "./src/styles/theme"
import { GlobalStyles } from "./src/styles/GlobalStyles"

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
