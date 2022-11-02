import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import HomeListOrg from "../../../organisms/HomeListOrg";
import styles from "./styles.module.css";

const List: PageFC = (props) => {
  const { router } = props;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <HomeListOrg router={router} />
      </div>
    </>
  );
};

export default List;
