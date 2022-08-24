import React, { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.css"
import { Close } from "../../public/images";

interface HeaderCloseProps {
  closeMenu: () => void;
}

const HeaderClose: FC<HeaderCloseProps> = (props) => {
  const {closeMenu} = props;

  return (
    <div className={styles.close} onClick={closeMenu}>
      <Image src={Close} alt="Close" layout="fill"/>
    </div>
  )
}

export default HeaderClose;