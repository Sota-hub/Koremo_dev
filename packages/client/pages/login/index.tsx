import React from "react";
import { PageFC } from "../../types";
import titleSSG from "../../helpers/functions/titleSSG";
import LoginOrg from "../../organisms/LoginOrg";
import styles from "./styles.module.css";

const Login: PageFC = (props) => {
  // const { router, currentUser } = props;

  return (
    <div className={styles.container}>
      <LoginOrg />
    </div>
  );
};

export const getStaticProps = titleSSG("Login");

export default Login;
