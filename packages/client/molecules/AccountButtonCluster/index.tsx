import React, { FC } from "react";
import AccountButton from "../../atoms/AccountButton";
import styles from "./styles.module.css";

const AccountButtonCluster: FC = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <AccountButton text="Friends" rounded path="/account/friends" />
        <AccountButton text="Pending" rounded path="/account/pending" />
        <AccountButton text="Search" rounded path="/account/search" />
      </div>
      <div className={styles.container}>
        <AccountButton text="Edit Profile" path="/account/edit" />
      </div>
    </div>
  );
};

export default AccountButtonCluster;
