import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    max-width: 120rem;
    font-family:"sofia-pro";
    color: #707070;
    margin: 0 auto;
    }
  
  h2 {
    font-size: 1.6vw;
    font-weight: 700;
  }
  h3 {
    font-size: 1.25vw;
    font-weight: 300;
  }
  h4 {
    font-size: 1.145vw;
    font-weight: 700;
  }
  h5 {
    font-size: 1.145vw;
    font-weight: 300;
  }
  p {
    font-size: 1.25vw;
    font-weight: 300;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    font-size: 1.25vw;
    font-weight: 300;
    color: #707070;
  }
  li {
    font-weight: 700;
    font-size: 1.375rem;
  }
`
export default GlobalStyle