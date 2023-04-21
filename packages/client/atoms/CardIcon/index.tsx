import React, { FC } from "react";
import Image from "next/image";
import { UserWhite, Cart } from "../../public/images";
import { CardIconProps } from "../../types/cardIcon";
import styles from "./styles.module.css";

const CardIcon: FC<CardIconProps> = (props) => {
  const { imageId, isItem = false } = props;

  return (
    <div className={styles.container}>
      <div className={`${styles.image} ${styles.base}`}>
        <Image
          src={isItem ? Cart : UserWhite}
          alt={isItem ? "item" : "user"}
          layout="fill"
          className={styles.radius}
        />
      </div>
      {imageId && (
        <div className={`${styles.image} ${styles.profile}`}>
          <Image
            src={`https://drive.google.com/uc?id=${imageId}`}
            alt={isItem ? "item image" : "profile image"}
            layout="fill"
            className={styles.radius}
            // add loader to avoid google understand "&" as "&amp;" in /_next/img out url
            loader={({ src }) => {
              return src;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CardIcon;
