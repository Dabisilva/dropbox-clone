import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        min-height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family:  Roboto, sans-serif ;
    }


    :root {
        --color-primary: #0d2f81;
        --color-secondary: #ffe7aa;
        --color-tertiary: #fff;
        --color-quaternary: #000;

        --color-blue: #0061ff;
        --color-border: #bdc4c9;
    }
`;