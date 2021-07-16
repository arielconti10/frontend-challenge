import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
    --veryDarkGrayishBlue: #171A21;
    --darkGrayishBlue: #292E3B;
    --veryLightBlue: #E0E6EB;
    --typeGroup1: #FDDFDF;
    --typeGroup2: #DEFDE0;
    --typeGroup3: #FCF7DE;
    --typeGroup4: #DEF3FD;
    --typeGroup5: #f4e7da;
    --typeGroup6: #d5d5d4;
    --typeGroup7: #fceaff;
    --typeGroup8: #98d7a5;
    --typeGroup9: #f8d5a3;
    --typeGroup10: #97b3e6;
    --typeGroup11: #eaeda1;
    --typeGroup12: #F5F5F5;
    --typeGroup13: #E6E0D4;
    --typeGroup14: #F5F5F5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  *, input, button {
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  
  body {
    min-height: 100vh;
    background-color: var(--veryDarkGrayishBlue);
  }
`
