import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30px;
`;

const Main = ({ children }) => (
  <StyledMain>
    <Container>{children}</Container>
  </StyledMain>
);

export default Main;
