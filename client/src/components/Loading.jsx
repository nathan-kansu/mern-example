import React from "react";
import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../assets/images/loading.svg";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const StyledLoadingIcon = styled(LoadingIcon)`
  height: 50px;
  width: 50px;
`;

const Loading = () => (
  <Container>
    <StyledLoadingIcon />
  </Container>
);
export default Loading;
