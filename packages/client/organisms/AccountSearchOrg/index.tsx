import React, { FC, useState, useCallback } from "react";
import SearchBar from "../../molecules/SearchBar";
import AccountInfo from "../../molecules/AccountInfo";
import Button from "../../molecules/Button";
import { BgColor, TextColor } from "@koremo/enums";
import styles from "./styles.module.css";

const AccountSearchOrg: FC = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const searchFriend = () => {
    console.log(searchWord);
  };

  return (
    <div className={styles.container}>
      <SearchBar
        placeholder="Enter the ID"
        onChange={useCallback((v: string) => setSearchWord(v), [])}
        onKeyDown={searchFriend}
        onClick={searchFriend}
      />
      <div className={styles.info}>
        <AccountInfo imageId={""} userName={"aaa"} userId={"AAa"} />
      </div>
      <div className={styles.button}>
        <Button
          bgColor={BgColor.Pink}
          text="Apply"
          textColor={TextColor.White}
        />
      </div>
    </div>
  );
};

export default AccountSearchOrg;
