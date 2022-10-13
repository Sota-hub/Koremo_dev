import React, { FC } from "react";
import Card from "../../molecules/Card";
import AddButton from "../../atoms/AddButton";
import { CardIconProps } from "../../types/cardIcon";
import { CardTextProps } from "../../types/cardText";
import styles from "./styles.module.css";

interface CardWithButtonProps extends CardIconProps, CardTextProps {}

const CardWithButton: FC<CardWithButtonProps> = (props) => {
  const { imageId, isItem, mainText, subText } = props;

  return (
    <Card
      imageId={imageId}
      isItem={isItem}
      mainText={mainText}
      subText={subText}
    >
      <AddButton
        onClick={() => {
          console.log("aaa");
        }}
      />
    </Card>
  );
};

const AccountPendingOrg: FC = (props) => {
  return (
    <>
      <h1 className={styles.headline}>Pending</h1>
      <div className={styles.container}>
        <div className={styles.item}>
          <CardWithButton
            imageId=""
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        <div className={styles.item}>
          <CardWithButton
            imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
            isItem
            mainText="Michael"
            subText="ID: 2013"
          />
        </div>
        {/* <div className={styles.item}>
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
        </div> */}
      </div>
    </>
  );
};

export default AccountPendingOrg;
