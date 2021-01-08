import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-shadow: 0;
    border: 0;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Bebas Neue';
    

    background: rgba(0,0,0,0.9);   
  }
`



export default GlobalStyle;