import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";
import HomeOrg from "../../organisms/HomeOrg";
import titleSSG from "../../helpers/functions/titleSSG";
import auth from "../../helpers/functions/auth";
import styles from "./styles.module.css";

const Home: PageFC = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <HomeOrg />
      </div>
    </>
  );
};

export const getStaticProps = titleSSG("Home");

export default auth(Home);
