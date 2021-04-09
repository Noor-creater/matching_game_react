import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
        font-family: 'Poppins', sans-serif;
    }

    h3 {
        font-size: 21px;
        font-weight: 700;
    }

    p {
        font-size: 14px;
        color: #525252;
    }
`;

export default GlobalStyle;