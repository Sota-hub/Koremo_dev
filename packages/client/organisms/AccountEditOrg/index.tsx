import React, { FC, useState } from "react";
import ImageUploader from "../../molecules/ImageUploader";
import Input from "../../atoms/Input";
import Button from "../../molecules/Button";
import { BgColor, TextColor } from "@koremo/enums";
import { User, useUpdateUserMutation } from "@koremo/graphql-client";
import { SetMessageProps } from "../../types/setMessage";
import styles from "./styles.module.css";

interface AccountEditOrg extends SetMessageProps {
  currentUser: User;
}

const AccountEditOrg: FC<AccountEditOrg> = (props) => {
  const { currentUser, setMessage } = props;
  const [imageId, setImageId] = useState(currentUser.profileImageId || null);
  const [userName, setUserName] = useState(currentUser.name);
  const [updateUserFunction] = useUpdateUserMutation();

  const updateUserRequest = async () => {
    try {
      await updateUserFunction({
        variables: {
          input: {
            name: userName,
            profileImageId: imageId,
          },
        },
      });
      setMessage("You have applied the request");
    } catch (e) {
      const error = e as Error;
      setMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploader}>
        <ImageUploader imageId={imageId} setImageId={setImageId} />
      </div>
      <div>
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
    </div>
  );
};

export default AccountEditOrg;
