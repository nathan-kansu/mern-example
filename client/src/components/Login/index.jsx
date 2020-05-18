import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import Heading from "../Heading";
import LoggedInContext from "../../contexts/LoggedIn";
import { login } from "../../api/users";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: -80px;
`;

const StyledButton = styled(Button)`
  border: solid 2px ${({ theme }) => theme.color.white};
  background: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  height: 34px;
  padding: 5px 0;
  width: 100%;
`;

const StyledInput = styled(Input)`
  margin-bottom: 15px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Warning = styled.div`
  color: ${({ theme }) => theme.color.red};
  margin-bottom: 15px;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState("");
  const [password, setPassword] = useState("");

  const redirectToHome = useCallback(() => {
    history.replace("/");
  }, [history]);

  useEffect(() => {
    if (isLoggedIn) {
      redirectToHome();
    }
  }, [isLoggedIn, redirectToHome]);

  const handleSubmit = async (event) => {
    login(email, password)
      .then(({ status }) => {
        if (status === 200) {
          setIsLoggedIn(true);
          redirectToHome();
        }
      })
      .catch(({ response }) => {
        const { status } = response;
        if (status === 400) {
          setIsInvalid(true);
        }
      });
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading>Welcome</Heading>
        <StyledInput
          autoFocus
          autocomplete="email"
          name="email"
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Email"
          required
          type="text"
          value={email}
        />
        <StyledInput
          autocomplete="on"
          name="password"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
          required
          type="password"
          value={password}
        />

        {isInvalid && <Warning>Username or password is invalid</Warning>}

        <StyledButton type="submit">Log In</StyledButton>
      </Form>
    </Container>
  );
};

export default Login;
