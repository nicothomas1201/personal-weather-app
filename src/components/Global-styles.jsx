import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --black-20: #100E1D;
    --black-10: #1E213A;
    --white-40: #6E707A;
    --white-30: #88869D;
    --white-20: #A09FB1;
    --white-10: #E7E7EB;
    --body-16: 500 16px/19px Raleway;
    --body-18-bold: 700 18px/21.13px Raleway;
    --heading-36: 600 36px/42.26px Raleway;
    --body-24-bold: 700 24px/28.18 Raleway;
  }

  body, html{
    background-color: var(--black-20);
    color: var(--white-10);
    margin: 0;
    padding: 0;
  }  
`

export default GlobalStyles