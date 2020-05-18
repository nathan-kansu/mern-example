import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../assets/images/loading.svg";

const StyledDiv = styled.div`
  height: 50px;
  width: 50px;
`;

const Loading = () => (
  <StyledDiv>
    <Icon />
  </StyledDiv>
);
export default Loading;
