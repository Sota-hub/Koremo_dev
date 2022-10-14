import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";
import ListOrg from "../../organisms/ListOrg";
import styles from "./styles.module.css";

const List: PageFC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ListOrg />
      </div>
    </>
  );
};

export default List;
