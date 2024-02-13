import { css, Global } from "@emotion/react";


const globalStyles = css`
body {
    background-color: #EBF2FA;
    font-family: "Raleway", sans-serif;
}
h1, h2, h3, h4, h5 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}
`;
export const GlobalStyles = () => <Global styles={globalStyles} />;