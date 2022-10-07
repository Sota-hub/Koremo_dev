import React, { FC } from "react";
import AccountIcon from "../../atoms/AccountIcon";
import AccountText from "../../atoms/AccountText";
import { AccountInfoProps } from "../../types/accountInfo";
import styles from "./styles.module.css";

const AccountInfo: FC<AccountInfoProps> = (props) => {
  const { imageId, userName, userId } = props;

  return (
    <div className={styles.container}>
      <AccountIcon imageId={imageId} />
      <AccountText userName={userName} userId={userId} />
    </div>
  );
};

export default AccountInfo;
