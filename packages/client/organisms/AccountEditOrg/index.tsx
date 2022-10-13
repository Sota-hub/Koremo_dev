import React, { FC } from "react";
import AccountIcon from "../../atoms/AccountIcon";
import Input from "../../atoms/Input";
import Button from "../../molecules/Button";
import { BgColor, TextColor } from "@koremo/enums";
import styles from "./styles.module.css";

const AccountEditOrg: FC = (props) => {
  return (
    <>
      <div className={styles.icon}>
        <AccountIcon imageId="" />
      </div>
      <div className={styles.container}>
        <Input type="text" name="text" placeholder="user_name" />
        <Button
          bgColor={BgColor.Pink}
          text="Update"
          textColor={TextColor.White}
        />
      </div>
    </>
  );
};

export default AccountEditOrg;
