import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyle";
import AdviceApp from "./containers/AdviceApp/AdviceApp";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AdviceApp role="main" />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
