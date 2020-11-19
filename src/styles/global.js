import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #20232A;
        -webkit-font-smoothing: antialiased !important;
    }

    body {
        color: #FFF;
        font-family: 'Ubuntu', sans-serif;
    }
`;
