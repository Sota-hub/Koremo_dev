import React, { FC, useState, useEffect, useCallback } from "react";
import SearchBar from "../../molecules/SearchBar";
import AccountInfo from "../../molecules/AccountInfo";
import Button from "../../molecules/Button";
import { BgColor, TextColor } from "@koremo/enums";
import {
  useSearchedUserQuery,
  SearchedUserQuery,
} from "@koremo/graphql-client";
import Loader from "../../atoms/Loader";
import styles from "./styles.module.css";

interface SearchedUserProps {
  data: SearchedUserQuery;
}

const SearchedUser: FC<SearchedUserProps> = (props) => {
  const user = props.data.searchedUser;

  if (!user) {
    return null;
  }

  const { id, name, profileImageId } = user;

  return (
    <>
      <div className={styles.info}>
        <AccountInfo
          imageId={profileImageId || null}
          userName={name}
          userId={id}
        />
      </div>
      <div className={styles.button}>
        <Button
          bgColor={BgColor.Pink}
          text="Apply"
          textColor={TextColor.White}
        />
      </div>
    </>
  );
};

const AccountSearchOrg: FC = (props) => {
  const [input, setInput] = useState("");
  const changeInput = useCallback((v: string) => setInput(v), []);
  const { loading, error, data, refetch } = useSearchedUserQuery({
    variables: {
      id: "",
    },
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (!data) {
    return <span>Something went wrong</span>;
  }

  const searchFriend = () => {
    refetch({ id: input });
  };

  return (
    <div className={styles.container}>
      <SearchBar
        placeholder="Enter the ID"
        onChange={changeInput}
        onKeyDown={searchFriend}
        onClick={searchFriend}
      />
      <SearchedUser data={data} />
    </div>
  );
};

export default AccountSearchOrg;
