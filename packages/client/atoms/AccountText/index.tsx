import React, { FC } from "react";
import styles from "./styles.module.css";
import { AccountTextProps } from "../../types/accountText";

const AccountText: FC<AccountTextProps> = (props) => {
  const { userName, userId } = props;

  return (
    <div className={styles.container}>
      <p className={styles.name}>{userName}</p>
      <p className={styles.id}>ID: {userId}</p>
    </div>
  );
};

export default AccountText;
