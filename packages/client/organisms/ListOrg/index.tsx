import React, { FC } from "react";
import Button from "../../molecules/Button";
import Card from "../../molecules/Card";
import { BgColor, TextColor } from "@koremo/enums";
import styles from "./styles.module.css";

const ListOrg: FC = (props) => {
  // fetch products(userProductsQuery)
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.headline}>Your List</h1>
        <div className={styles.button}>
          <Button
            bgColor={BgColor.Pink}
            text="Create"
            textColor={TextColor.White}
            onClick={() => {
              console.log("redirect to /list/create");
            }}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <Card imageId="" mainText="Pencil" subText="Daiso"></Card>
        </div>
        <div className={styles.item}>
          <Card imageId="" mainText="Pencil" subText="Daiso"></Card>
        </div>
        <div className={styles.item}>
          <Card imageId="" mainText="Pencil" subText="Daiso"></Card>
        </div>
        <div className={styles.item}>
          <Card imageId="" mainText="Pencil" subText="Daiso"></Card>
        </div>
      </div>
    </>
  );
};

export default ListOrg;
