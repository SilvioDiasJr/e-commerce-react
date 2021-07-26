import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-size;
  }

  body { 
    max-width: 1440px;
    height: 100%;

    margin: 0 auto;
    background-color: #f7f7f7;

    font-family: "Montserrat", Helvetica, sans-serif;
  }

  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

`