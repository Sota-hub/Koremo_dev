import React, { useState } from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import AccountSearchOrg from "../../../organisms/AccountSearchOrg";
import Alert from "../../../atoms/Alert";
import auth from "../../../helpers/functions/auth";
import titleSSG from "../../../helpers/functions/titleSSG";
import styles from "./styles.module.css";

const AccountSearch: PageFC = (props) => {
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountSearchOrg setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export const getStaticProps = titleSSG("Account Search");

export default auth(AccountSearch);
