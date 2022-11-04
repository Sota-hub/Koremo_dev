import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";
import ListOrg from "../../organisms/ListOrg";
import titleSSG from "../../helpers/functions/titleSSG";
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

export const getStaticProps = titleSSG("List");

export default auth(List);
