import React, { FC } from "react";
import Image from "next/image";
import { Search } from "../../public/images";
import { SearchButtonProps } from "../../types/searchButton";
import styles from "./styles.module.css";

const SearchButton: FC<SearchButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <span className={styles.button} onClick={onClick}>
      <div className={styles.icon}>
        <Image src={Search} alt="search" layout="fill" />
      </div>
    </span>
  );
};

export default SearchButton;
