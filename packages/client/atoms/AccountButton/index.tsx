import React, { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

interface AccountButton {
  text: string;
  rounded?: boolean;
  path: string;
}

const AccountButton: FC<AccountButton> = (props) => {
  const { text, rounded, path } = props;

  return (
    <Link href={path} passHref>
      <a
        className={
          rounded ? `${styles.button} ${styles.rounded}` : styles.button
        }
      >
        {text}
      </a>
    </Link>
  );
};

export default AccountButton;
