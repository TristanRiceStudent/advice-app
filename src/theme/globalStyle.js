import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        height: 100%;
        width: 100%;
    }

    body, 
    #root {
        height: 100%;
        min-height: 100%;
    }

    :root {
        font-size: 18px;
    }
`;
