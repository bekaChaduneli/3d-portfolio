import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<any>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Outfit', sans-serif;
        display: flex;
        justify-content: center;
        height: 100vh;
    }
    span {
        font-weight: 500;
    }
    p {
        font-weight: 300;
    }
`;

export default GlobalStyles;
