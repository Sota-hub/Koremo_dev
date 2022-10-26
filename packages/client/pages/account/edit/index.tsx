import React, { useState } from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import Alert from "../../../atoms/Alert";
import AccountEditOrg from "../../../organisms/AccountEditOrg";
import auth from "../../../helpers/functions/auth";
import titleSSG from "../../../helpers/functions/titleSSG";
import styles from "./styles.module.css";

const AccountEdit: PageFC = (props) => {
  const { currentUser } = props;
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountEditOrg currentUser={currentUser} setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export const getStaticProps = titleSSG("Account Edit");

export default auth(AccountEdit);
