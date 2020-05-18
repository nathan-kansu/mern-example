import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.color.white};
    font-family: Roboto;
    background: linear-gradient(20deg, ${({ theme }) => theme.color.pink}, ${({
  theme,
}) => theme.color.orange});
  }

  button {
      border: 0;
      cursor: pointer;
      padding: 0;
  }
`;
export default GlobalStyle;
