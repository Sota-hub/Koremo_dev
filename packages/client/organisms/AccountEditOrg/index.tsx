import React, { FC, useState, Dispatch, SetStateAction } from "react";
import AccountIcon from "../../atoms/AccountIcon";
import Input from "../../atoms/Input";
import Button from "../../molecules/Button";
import { BgColor, TextColor } from "@koremo/enums";
import { User, useUpdateUserMutation } from "@koremo/graphql-client";
import styles from "./styles.module.css";

interface AccountEditOrg {
  currentUser: User;
  setMessage: Dispatch<SetStateAction<string>>;
}

const AccountEditOrg: FC<AccountEditOrg> = (props) => {
  const { currentUser, setMessage } = props;
  const [userName, setUserName] = useState(currentUser.name);
  const [updateUserFunction] = useUpdateUserMutation();

  const updateUserRequest = async () => {
    try {
      await updateUserFunction({
        variables: {
          input: {
            name: userName,
            profileImageId: "",
          },
        },
      });
      setMessage("Update was succeeded");
    } catch (e) {
      const error = e as Error;
      setMessage(error.message);
    }
  };

  return (
    <>
      <div className={styles.icon}>
        <AccountIcon imageId="" /> {/*変更できるようなコンポーネントを作成*/}
      </div>
      <div className={styles.container}>
        <Input
          type="text"
          name="name"
          placeholder="user_name"
          value={userName}
          onChange={(v: string) => {
            setUserName(v);
          }}
        />
        <Button
          bgColor={BgColor.Pink}
          text="Update"
          textColor={TextColor.White}
          onClick={updateUserRequest}
        />
      </div>
    </>
  );
};

export default AccountEditOrg;
