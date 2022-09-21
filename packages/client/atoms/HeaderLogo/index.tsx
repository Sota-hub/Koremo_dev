import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { Logo } from "../../public/images";

const HeaderLogo: FC = (props) => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <a>
          <Image src={Logo} alt="Logo" layout="fill" />
        </a>
      </Link>
    </div>
  );
};

export default HeaderLogo;
