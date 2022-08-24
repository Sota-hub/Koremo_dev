import React, { FC } from "react";
import HeaderLogo from "../../atoms/HeaderLogo";
import HeaderMenu from "../../molecules/HeaderMenu";
import styles from "./styles.module.css"

const Header: FC = (props) => {
  return (
    <div className={styles.header}>
      <HeaderLogo />
      <HeaderMenu />
    </div>
  )
}

export default Header;