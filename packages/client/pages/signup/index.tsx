import React from "react";
import { PageFC } from "../../types";
import titleSSG from "../../helpers/functions/titleSSG";
import SignupOrg from "../../organisms/SignupOrg";
import styles from "./styles.module.css"

const Signup: PageFC = (props) => {
  const { router, currentUser } = props;

  return (
    <div className={styles.container}>
      <SignupOrg />
    </div>
  );
};

export const getStaticProps = titleSSG("Sign up");

export default Signup;
