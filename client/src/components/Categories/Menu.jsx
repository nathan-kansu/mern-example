import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { ReactComponent as AddIcon } from "../../assets/images/add.svg";
import { ReactComponent as UpdateIcon } from "../../assets/images/update.svg";
import { ReactComponent as DeleteIcon } from "../../assets/images/delete.svg";

const StyledButton = styled(Button)`
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  border-radius: 3px;
  display: flex;
  padding: 5px;
  position: absolute;
  right: -40px;
  top: -20px;
`;

const Menu = ({ handleAdd, handleDelete, handleEdit, hasChildren }) => (
  <Container>
    {!hasChildren && (
      <StyledButton onClick={handleAdd}>
        <AddIcon />
      </StyledButton>
    )}
    <StyledButton onClick={handleEdit}>
      <UpdateIcon />
    </StyledButton>
    <StyledButton onClick={handleDelete}>
      <DeleteIcon />
    </StyledButton>
  </Container>
);

export default Menu;
