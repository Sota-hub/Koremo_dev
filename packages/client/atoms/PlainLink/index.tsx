import React, { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

interface PlainLinkProps {
  href: string;
  text: string;
}

const PlainLink: FC<PlainLinkProps> = (props) => {
  const { href, text } = props;

  return (
    <Link href={href} passHref>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};

export default PlainLink;
