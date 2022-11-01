import React, { FC } from "react";
import Card from "../../molecules/Card";
import AddButton from "../../atoms/AddButton";
import Loader from "../../atoms/Loader";
import { CardIconProps } from "../../types/cardIcon";
import { CardTextProps } from "../../types/cardText";
import {
  usePendingQuery,
  useApproveFriendMutation,
} from "@koremo/graphql-client";
import { SetMessageProps } from "../../types/setMessage";
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

const AccountPendingOrg: FC<SetMessageProps> = (props) => {
  const { setMessage } = props;
  const { loading, error, data, refetch } = usePendingQuery();
  const [approveFriendFunction] = useApproveFriendMutation();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (!data) {
    return <span>Something went wrong</span>;
  }

  const approveFriendRequest = async (props: { userId: string }) => {
    const { userId } = props;
    try {
      await approveFriendFunction({
        variables: {
          userId,
        },
      });
      refetch();
    } catch (e) {
      const error = e as Error;
      setMessage(error.message);
    }
  };

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
                onClick={() => {
                  approveFriendRequest({ userId: user.id });
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AccountPendingOrg;
