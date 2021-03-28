import { createGlobalStyle } from "styled-components";
const globalStyles = createGlobalStyle`
  body{
       /* background-color:${({ theme }) => theme.darken}; */
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Sans Serif';
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: ${({ theme }) => theme.darken};
   color:#fff;
   overflow-x:hidden;
  }
  ul{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:inherit
  }

`

export default globalStyles

