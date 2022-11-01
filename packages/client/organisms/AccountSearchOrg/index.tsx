import React, { FC, useState, useCallback } from "react";
import SearchBar from "../../molecules/SearchBar";
import AccountInfo from "../../molecules/AccountInfo";
import Button from "../../molecules/Button";
import Loader from "../../atoms/Loader";
import { BgColor, TextColor } from "@koremo/enums";
import {
  useSearchedUserQuery,
  SearchedUserQuery,
  useApplyFriendMutation,
} from "@koremo/graphql-client";
import { SetMessageProps } from "../../types/setMessage";
import styles from "./styles.module.css";

interface SearchedUserProps {
  data: SearchedUserQuery;
  onClick: () => void;
}

const SearchedUser: FC<SearchedUserProps> = (props) => {
  const { data, onClick } = props;
  const user = data.searchedUser;

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
          onClick={onClick}
        />
      </div>
    </>
  );
};

const AccountSearchOrg: FC<SetMessageProps> = (props) => {
  const { setMessage } = props;
  const [input, setInput] = useState("");
  const changeInput = useCallback((v: string) => setInput(v), []);
  const [applyFriendFunction] = useApplyFriendMutation();
  const { loading, error, data, refetch } = useSearchedUserQuery({
    variables: {
      id: "",
    },
  });

  const searchFriend = useCallback(() => {
    refetch({ id: input });
  }, [input]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (!data) {
    return <span>Something went wrong</span>;
  }

  const applyFriendRequest = async () => {
    const user = data.searchedUser;
    if (!user) {
      return;
    }
    try {
      await applyFriendFunction({
        variables: {
          friendId: user.id,
        },
      });
      setMessage("Have sent the request");
    } catch (e) {
      const error = e as Error;
      setMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <SearchBar
        placeholder="Enter the ID"
        onChange={changeInput}
        onKeyDown={searchFriend}
        onClick={searchFriend}
      />
      <SearchedUser data={data} onClick={applyFriendRequest} />
    </div>
  );
};

export default AccountSearchOrg;
