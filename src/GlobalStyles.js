import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    max-width: 120rem;
    font-family:"sofia-pro", sans-serif;
    color: #707070;
    margin: 0 auto;
    }
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 300;
  }
  h4 {
    font-size: 1.375rem;
    font-weight: 700;
  }
  h5 {
    font-size: clamp(0.916rem,1.145vw, 1.374rem);
    font-weight: 300;
  }
  p {
    /* font-size: clamp(1rem, 1.25vw, 1.5rem); */
    font-size: 1.5rem;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    font-size: 1.375rem;
    font-weight: 300;
    color: #707070;
  }
  li {
    font-weight: 700;
  }
`
export default GlobalStyle