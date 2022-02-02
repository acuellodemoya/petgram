import React, { useState, useEffect, Fragment } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

//Hook
const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window
      .fetch(
        "https://petgram-server-acuellodemoya-acuellodemoya.vercel.app/categories"
      )
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  return { categories };
};
//EndHook

export const ListOfCategories = () => {
  const { categories } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => {
        return (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        );
      })}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed ? renderList(true) : ""}
    </Fragment>
  );
};
