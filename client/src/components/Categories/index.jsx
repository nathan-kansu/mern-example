import React, { useState, useContext } from "react";
import List from "./List";
import Button from "../Button";
import Input from "../Input";
import Category from "./Category";
import CategoriesContext from "../../contexts/Categories";
import {
  createCategory,
  deleteCategories,
  updateCategory,
} from "../../api/categories";
import { ReactComponent as AddIcon } from "../../assets/images/add.svg";

const Categories = ({ parentCategory }) => {
  const { state } = useContext(CategoriesContext);
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const { categories } = state;

  const currentCategories = categories.filter(
    ({ parent }) => parent === parentCategory
  );

  const hasChildren = (category) =>
    !!categories.filter(({ parent }) => parent === category).length;

  const handleChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleCreate = (newCategory, parentCategory) => {
    setIsAdding(false);
    createCategory(newCategory, parentCategory);
  };

  const handleDelete = (id) => deleteCategories(id);
  const handleUpdate = (id, category) => updateCategory(id, category);

  return (
    <List>
      {currentCategories.map(({ _id, label }) => (
        <Category
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          hasChildren={hasChildren(label)}
          id={_id}
          key={_id}
          label={label}
        />
      ))}

      {isAdding ? (
        <Input
          autoFocus
          onBlur={() => handleCreate(newCategory, parentCategory)}
          onChange={handleChange}
          value={newCategory}
          placeholder="Add Category"
        />
      ) : (
        <Button
          onClick={() => {
            setIsAdding(true);
          }}
        >
          <AddIcon />
        </Button>
      )}
    </List>
  );
};

export default Categories;
