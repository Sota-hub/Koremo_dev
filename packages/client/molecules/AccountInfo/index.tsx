import React, { FC } from "react";
import AccountIcon from "../../atoms/AccountIcon";
import AccountText from "../../atoms/AccountText";
import { AccountIconProps } from "../../types/accountIcon";
import { AccountTextProps } from "../../types/accountText";
import styles from "./styles.module.css";

interface AccountInfoProps extends AccountIconProps, AccountTextProps {}

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
