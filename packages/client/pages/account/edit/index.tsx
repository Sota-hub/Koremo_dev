import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import AccountEditOrg from "../../../organisms/AccountEditOrg";
import styles from "./styles.module.css";

const AccountEdit: PageFC = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountEditOrg />
      </div>
    </>
  );
};

export default AccountEdit;
