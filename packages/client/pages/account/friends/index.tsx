import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import AccountFriendsOrg from "../../../organisms/AccountFriendsOrg";
import auth from "../../../helpers/functions/auth";
import titleSSG from "../../../helpers/functions/titleSSG";
import styles from "./styles.module.css";

const AccountFriends: PageFC = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountFriendsOrg />
      </div>
    </>
  );
};

export const getStaticProps = titleSSG("Account Friends");

export default auth(AccountFriends);
