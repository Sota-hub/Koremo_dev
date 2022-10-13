import React, { FC } from "react";
import Card from "../../molecules/Card";
import styles from "./styles.module.css";

const AccountFriendsOrg: FC = (props) => {
  return (
    <>
      <h1 className={styles.headline}>Friends</h1>
      <div className={styles.container}>
        <div className={styles.item}>
          <Card
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          ></Card>
        </div>
        <div className={styles.item}>
          <Card
            imageId=""
            isItem
            mainText="main-text"
            subText="sub-text"
          ></Card>
        </div>
        <div className={styles.item}>
          <Card
            imageId=""
            isItem
            mainText="main-text"
            subText="sub-text"
          ></Card>
        </div>
        <div className={styles.item}>
          <Card
            imageId=""
            isItem
            mainText="main-text"
            subText="sub-text"
          ></Card>
        </div>
        <div className={styles.item}>
          <Card
            imageId=""
            isItem
            mainText="main-text"
            subText="sub-text"
          ></Card>
        </div>
        <div className={styles.item}>
          <Card
            imageId=""
            isItem
            mainText="main-text"
            subText="sub-text"
          ></Card>
        </div>
        <div className={styles.item}>
          <Card
            imageId=""
            isItem
            mainText="main-text"
            subText="sub-text"
          ></Card>
        </div>
        <div className={styles.item}>
          <Card
            imageId=""
            isItem
            mainText="main-text"
            subText="sub-text"
          ></Card>
        </div>
      </div>
    </>
  );
};

export default AccountFriendsOrg;
