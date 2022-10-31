import React, { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

interface LinkButtonProps {
  path: string;
  text: string;
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  const { path, text } = props;

  return (
    <Link href={path} passHref>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};

export default LinkButton;
