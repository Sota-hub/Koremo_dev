import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";
import ListOrg from "../../organisms/ListOrg";
import auth from "../../helpers/functions/auth";
import styles from "./styles.module.css";

const List: PageFC = (props) => {
  const { router, currentUser } = props;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ListOrg router={router} currentUser={currentUser} />
      </div>
    </>
  );
};

export default auth(List);
