import React, { useState, useEffect } from "react";
import { PageFC } from "../../types";
import titleSSG from "../../helpers/functions/titleSSG";
import Alert from "../../atoms/Alert";
import LoginOrg from "../../organisms/LoginOrg";
import styles from "./styles.module.css";

const Login: PageFC = (props) => {
  const { router } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (router.query.prev === "signup") {
      setIsVisible(true);
    }
  });

  return (
    <>
      {isVisible && (
        <Alert message={"Please input the account info you have created"} />
      )}
      <div className={styles.container}>
        <LoginOrg />
      </div>
    </>
  );
};

export const getStaticProps = titleSSG("Login");

export default Login;
