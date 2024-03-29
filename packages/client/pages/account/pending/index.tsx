import React, { useState } from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import AccountPendingOrg from "../../../organisms/AccountPendingOrg";
import Alert from "../../../atoms/Alert";
import auth from "../../../helpers/functions/auth";
import titleSSG from "../../../helpers/functions/titleSSG";
import styles from "./styles.module.css";

const AccountPending: PageFC = (props) => {
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountPendingOrg setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export const getStaticProps = titleSSG("Account Pending");

export default auth(AccountPending);
