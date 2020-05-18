import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";

const StyledButton = styled(Button)`
  background: none;
  ${({ isActive }) =>
    isActive &&
    `
    transform: rotate(180deg);
  `}
`;

const CategoryToggle = ({ handleClick, isActive }) => (
  <StyledButton isActive={isActive} onClick={handleClick}>
    <Arrow />
  </StyledButton>
);

export default CategoryToggle;
