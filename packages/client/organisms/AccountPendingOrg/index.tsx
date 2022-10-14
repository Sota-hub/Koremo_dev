import React, { FC } from "react";
import Card from "../../molecules/Card";
import AddButton from "../../atoms/AddButton";
import Loader from "../../atoms/Loader";
import { CardIconProps } from "../../types/cardIcon";
import { CardTextProps } from "../../types/cardText";
import { usePendingQuery } from "@koremo/graphql-client";
import styles from "./styles.module.css";

interface CardWithButtonProps extends CardIconProps, CardTextProps {
  onClick: () => void;
}

const CardWithButton: FC<CardWithButtonProps> = (props) => {
  const { imageId, isItem, mainText, subText, onClick } = props;

  return (
    <Card
      imageId={imageId}
      isItem={isItem}
      mainText={mainText}
      subText={subText}
    >
      <AddButton onClick={onClick} />
    </Card>
  );
};

const AccountPendingOrg: FC = (props) => {
  const { loading, error, data } = usePendingQuery();

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
      <h1 className={styles.headline}>Pending</h1>
      <div className={styles.container}>
        {data.pending.map((user) => {
          if (!user) {
            return null;
          }
          return (
            <div className={styles.item} key={user.id}>
              <CardWithButton
                imageId={user.profileImageId || null}
                mainText={user.name}
                subText={`ID: ${user.id}`}
                onClick={() => console.log("AAA")}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AccountPendingOrg;
