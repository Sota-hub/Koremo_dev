import React, { FC } from "react";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import { useFriendsQuery } from "@koremo/graphql-client";
import styles from "./styles.module.css";

const AccountFriendsOrg: FC = (props) => {
  const { loading, error, data } = useFriendsQuery();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (!data) {
    return <span>Something went wrong</span>;
  }

  return (
    <>
      <h1 className={styles.headline}>Friends</h1>
      <div className={styles.container}>
        {data.friends.map((friend) => {
          if (!friend) {
            return null;
          }
          return (
            <div className={styles.item} key={friend.id}>
              <Card
                imageId={friend.profileImageId || null}
                mainText={friend.name}
                subText={`ID: ${friend.id}`}
              ></Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AccountFriendsOrg;
