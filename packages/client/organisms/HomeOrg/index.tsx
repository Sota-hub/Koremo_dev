import React, { FC, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SearchBar from "../../molecules/SearchBar";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import {
  useFriendsAndProductsLengthQuery,
  FriendsAndProductsLength,
} from "@koremo/graphql-client";
import styles from "./styles.module.css";

const HomeOrg: FC = (props) => {
  const [input, setInput] = useState("");
  const [friend, setFriend] = useState<FriendsAndProductsLength[]>();
  const { loading, error, data } = useFriendsAndProductsLengthQuery();
  useEffect(() => {
    if (loading || error || !data || !data.friendsAndProductsLength) {
      return;
    }
    setFriend(data.friendsAndProductsLength);
  }, [loading, error, data]);
  const changeInput = useCallback((v: string) => setInput(v), []);
  const filterFriend = useCallback(
    (data: FriendsAndProductsLength[], input: string) => {
      if (!input) {
        setFriend(data);
      } else {
        setFriend(
          data.filter((item) => {
            return item.name.includes(input);
          })
        );
      }
    },
    []
  );

  if (loading) {
    console.log("ロード中です");
    return <Loader />;
  }
  if (error) {
    console.log("エラーが発生しました");
    return <span>{error.message}</span>;
  }
  if (!data) {
    console.log("データが存在します");
    return <span>Something went wrong</span>;
  }

  const onFilterFriend = () => {
    filterFriend(data.friendsAndProductsLength, input);
  };

  return (
    <>
      <SearchBar
        placeholder="Search by friend's name"
        onChange={changeInput}
        onClick={onFilterFriend}
        onKeyDown={onFilterFriend}
      />
      <div className={styles.wrap}>
        <h2 className={styles.headline}>Check what your friend want</h2>
        <div className={styles.container}>
          {friend &&
            friend.map((item) => (
              <Link
                href={`/home/list?userId=${item.id}&name=${item.name}`}
                passHref
                key={item.name}
              >
                <a className={styles.item}>
                  <Card
                    imageId={item.profileImageId || null}
                    mainText={item.name}
                    subText={`${String(item.productsLength)} products in list`}
                  />
                </a>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default HomeOrg;
