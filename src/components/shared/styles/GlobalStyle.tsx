import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    #root {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    box-sizing: border-box;
  } 
  
  body { 
    background-color: #f1f4f9;
    font-size: 14px;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .loader-container {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
`;
