import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import Heading from "../Heading";
import Loading from "../Loading";
import Categories from "../Categories";
import { getCategories } from "../../api/categories";
import {
  CATEGORIES_CREATE,
  CATEGORIES_GET,
  CATEGORIES_DELETE,
  CATEGORIES_UPDATE,
} from "../../reducers/categories";
import CategoriesContext from "../../contexts/Categories";

const LoadingContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Home = () => {
  const { state, dispatch } = useContext(CategoriesContext);

  useEffect(() => {
    const socket = io.connect("http://localhost:9000");

    socket.on("category:delete", (data) => {
      const { id } = data;
      dispatch({ type: CATEGORIES_DELETE, payload: id });
    });

    socket.on("category:update", ({ _id, label }) =>
      dispatch({ type: CATEGORIES_UPDATE, payload: { _id, label } })
    );

    socket.on("category:created", ({ _id, label, parent }) => {
      dispatch({ type: CATEGORIES_CREATE, payload: { _id, label, parent } });
    });
  }, [dispatch]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      dispatch({ type: CATEGORIES_GET, payload: categories });
    };
    fetchCategories();
  }, [dispatch]);

  return (
    <>
      <Heading>Categories</Heading>
      {!state.categories.length ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <Categories parentCategory={null} />
      )}
    </>
  );
};

export default Home;
