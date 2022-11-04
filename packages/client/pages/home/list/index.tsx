import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import HomeListOrg from "../../../organisms/HomeListOrg";
import titleSSG from "../../../helpers/functions/titleSSG";
import auth from "../../../helpers/functions/auth";
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

export const getStaticProps = titleSSG("Home List");

export default auth(List);
