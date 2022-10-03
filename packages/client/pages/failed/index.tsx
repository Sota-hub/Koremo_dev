import React from "react";
import { PageFC } from "../../types";
import titleSSG from "../../helpers/functions/titleSSG";
import styles from "./styles.module.css";

const Failed: PageFC = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.item}>Failed</h1>
    </div>
  );
};

export const getStaticProps = titleSSG("Failed");

export default Failed;
