import React, { FC } from "react";
import Image from "next/image";
import { ProductImageProps } from "../../types/productImage";
import { Cart } from "../../public/images";
import styles from "./styles.module.css";

const ProductImage: FC<ProductImageProps> = (props) => {
  const { imageId } = props;

  return (
    <div className={styles.container}>
      <div className={`${styles.image} ${styles.base}`}>
        <Image
          src={Cart}
          alt="product"
          layout="fill"
          className={styles.radius}
        />
      </div>
      {imageId && (
        <div className={`${styles.image} ${styles.product}`}>
          <Image
            src={`https://drive.google.com/uc?id=${imageId}`}
            alt="product image"
            layout="fill"
            className={styles.radius}
            loader={({ src }) => {
              return src;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductImage;
