import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import AccountPendingOrg from "../../../organisms/AccountPendingOrg";
import styles from "./styles.module.css";

const AccountPending: PageFC = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountPendingOrg />
      </div>
    </>
  );
};

export default AccountPending;
