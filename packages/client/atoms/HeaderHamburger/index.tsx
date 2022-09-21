import React, { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { Hamburger } from "../../public/images";

interface HeaderHamburgerProps {
  openMenu: () => void;
}

const HeaderHamburger: FC<HeaderHamburgerProps> = (props) => {
  const { openMenu } = props;

  return (
    <div className={styles.hamburger} onClick={openMenu}>
      <Image src={Hamburger} alt="Hamburger" layout="fill" />
    </div>
  );
};

export default HeaderHamburger;
