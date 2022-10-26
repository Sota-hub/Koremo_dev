import React, { FC } from "react";
import ProductImage from "../../atoms/ProductImage";
import ImageUploadButton from "../../atoms/ImageUploadButton";
import { ProductImageProps } from "../../types/productImage";
import styles from "./styles.module.css";

const ImageUploader: FC<ProductImageProps> = (props) => {
  return (
    <>
      <ProductImage imageId={null} />
      <ImageUploadButton
        onClick={() => {
          console.log("aaa");
        }}
      />
    </>
  );
};

export default ImageUploader;
