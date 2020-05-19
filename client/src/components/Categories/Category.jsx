import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../Heading";
import Input from "../Input";
import Menu from "./Menu";
import Toggle from "./Toggle";
import Categories from ".";

const AddInput = styled(Input)`
  margin: 15px 0 15px 30px;
`;

const CategoryContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled(Heading)`
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const StyledLi = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  > ul {
    margin: 15px 0 0 30px;
  }
`;

const Category = ({
  handleCreate,
  handleDelete,
  handleUpdate,
  hasChildren,
  id,
  label,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [text, setText] = useState(() => label);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => setText(label), [label]);

  const handleActiveToggle = () => setIsActive((prevShowMenu) => !prevShowMenu);

  const handleAdd = () => setIsAdding(true);

  const handleEditBlur = () => {
    setIsEditing(false);
    handleUpdate(id, text);
  };

  const handleAddBlur = () => {
    setIsAdding(false);
    setIsActive(true);
    handleCreate(newCategory, text);
  };

  return (
    <StyledLi>
      <CategoryContainer>
        <LabelContainer
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          {isEditing ? (
            <Input
              autoFocus
              onChange={({ target }) => setText(target.value)}
              onBlur={handleEditBlur}
              required
              type="text"
              value={text}
            />
          ) : (
            <Label as="h2">{text}</Label>
          )}

          {showMenu && (
            <Menu
              handleAdd={() => handleAdd()}
              hasChildren={hasChildren}
              handleDelete={() => handleDelete(text)}
              handleEdit={() => setIsEditing(true)}
            />
          )}
        </LabelContainer>
        {hasChildren && (
          <Toggle
            handleClick={() => handleActiveToggle()}
            isActive={isActive}
          />
        )}
      </CategoryContainer>

      {isAdding && (
        <AddInput
          autoFocus
          onBlur={handleAddBlur}
          onChange={({ target }) => setNewCategory(target.value)}
          value={newCategory}
          placeholder="Add Category"
        />
      )}

      {isActive && (
        <>
          <Categories parentCategory={label} />
        </>
      )}
    </StyledLi>
  );
};

export default Category;
