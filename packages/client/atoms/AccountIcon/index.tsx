import React, { FC } from "react";
import Image from "next/image";
import { UserWhite } from "../../public/images";
import styles from "./styles.module.css";
import { AccountIconProps } from "../../types/accountIcon";

const AccountIcon: FC<AccountIconProps> = (props) => {
  const { imageId } = props;

  return (
    <div className={styles.container}>
      <div className={`${styles.image} ${styles.base}`}>
        <Image
          src={UserWhite}
          alt="user"
          layout="fill"
          className={styles.circle}
        />
      </div>
      {imageId && (
        <div className={`${styles.image} ${styles.profile}`}>
          <Image
            src={`https://drive.google.com/uc?id=${imageId}`}
            alt="profile image"
            layout="fill"
            className={styles.circle}
          />
        </div>
      )}
    </div>
  );
};

export default AccountIcon;
