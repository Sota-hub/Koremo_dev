import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";
import AccountOrg from "../../organisms/AccountOrg";
import { useUserQuery } from "@koremo/graphql-client";
import styles from "./styles.module.css";

const Account: PageFC = () => {
  const user = useUserQuery();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountOrg
          // imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
          userName="user111"
          userId="74895123"
        />
      </div>
    </>
  );
};

export default Account;
