import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./Container";
import Heading from "./Heading";
import LoggedInContext from "../contexts/LoggedIn";
import CategoriesContext from "../contexts/Categories";
import { CATEGORIES_CLEAR } from "../reducers/categories";
import { ReactComponent as LogoIcon } from "../assets/images/logo.svg";
import { ReactComponent as LogoutIcon } from "../assets/images/logout.svg";

const Button = styled.button`
  margin-left: auto;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.color.white};
  height: 30px;
  text-decoration: underline;
  width: 30px;
`;

const LogoContainer = styled.div`
  height: 50px;
  margin-right: 5px;
  width: 50px;
`;

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`;

const StyledHeader = styled.header`
  justify-content: center;
  display: flex;
  margin-top: 30px;
`;

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const { dispatch } = useContext(CategoriesContext);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    dispatch({ type: CATEGORIES_CLEAR });
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <Link to={"/"}>
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>
        </Link>

        <StyledHeading as="div">Example MERN Stack</StyledHeading>

        {isLoggedIn && (
          <Button title="Log Out" onClick={handleLogOut}>
            <LogoutIcon />
          </Button>
        )}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
