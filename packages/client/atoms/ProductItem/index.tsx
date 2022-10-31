import React, { FC } from "react";
import styles from "./styles.module.css";

interface ProductItemProps {
  headline: string;
  text: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
  const { headline, text } = props;

  return (
    <>
      <p className={styles.headline}>{headline} :</p>
      <p className={styles.text}>{text}</p>
    </>
  );
};

export default ProductItem;
