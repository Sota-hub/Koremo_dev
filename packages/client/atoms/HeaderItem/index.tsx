import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

interface HeaderItemProps {
  link: string;
  text: string;
  icon: string;
}

const HeaderItem: FC<HeaderItemProps> = (props) => {
  const { link, text, icon } = props;
  return (
    <Link href={link} passHref>
      <a className={styles.link}>
        <div className={styles.icon}>
          <Image src={icon} layout="fill" />
        </div>
        <p className={styles.text}>{text}</p>
      </a>
    </Link>
  );
};

export default HeaderItem;
