import styled from "styled-components";
import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
`


export const WrappedDiv = styled.div`

  width: 100%;
  height: 30px;
  background-color: #ccc;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`