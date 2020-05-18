import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./Container";
import Heading from "./Heading";
import { ReactComponent as LogoIcon } from "../assets/images/logo.svg";

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`;

const LogoContainer = styled.div`
  height: 50px;
  margin-right: 5px;
  width: 50px;
`;

const StyledHeader = styled.header`
  justify-content: center;
  display: flex;
  margin-top: 30px;
`;

const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <Link to={"/"}>
        <LogoContainer>
          <LogoIcon />
        </LogoContainer>
      </Link>

      <StyledHeading as="div">Example MERN Stack</StyledHeading>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
