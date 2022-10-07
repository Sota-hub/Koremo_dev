import React, { FC } from "react";
import AccountInfo from "../../molecules/AccountInfo";
import AccountButtonCluster from "../../molecules/AccountButtonCluster";
import { AccountInfoProps } from "../../types/accountInfo";
import styles from "./styles.module.css";

const AccountOrg: FC<AccountInfoProps> = (props) => {
  const { imageId, userName, userId } = props;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <AccountInfo imageId={imageId} userName={userName} userId={userId} />
      </div>
      <div className={styles.button}>
        <AccountButtonCluster />
      </div>
    </div>
  );
};

export default AccountOrg;
