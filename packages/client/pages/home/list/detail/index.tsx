import React from "react";
import { PageFC } from "../../../../types";
import Header from "../../../../organisms/Header";
import HomeDetailOrg from "../../../../organisms/HomeDetailorg";
import styles from "./styles.module.css";

const Detail: PageFC = (props) => {
  const { router } = props;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <HomeDetailOrg router={router} />
      </div>
    </>
  );
};

export default Detail;
