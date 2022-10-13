import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import AccountSearchOrg from "../../../organisms/AccountSearchOrg";
import styles from "./styles.module.css";

const AccountSearch: PageFC = (props) => {
  return (
    <>
      <Header />
      <AccountSearchOrg />
    </>
  );
};

export default AccountSearch;