import React, { FC, ChangeEvent } from "react";
import ProductImage from "../../atoms/ProductImage";
import ImageUploadButton from "../../atoms/ImageUploadButton";
import { ProductImageProps } from "../../types/productImage";
import { SetInputProps } from "../../types/inputAndSetInput";
import styles from "./styles.module.css";

interface ImageUploaderProps extends ProductImageProps, SetInputProps {}

const ImageUploader: FC<ImageUploaderProps> = (props) => {
  const { imageId, setInput } = props;

  const getFileInfo = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const filePath = URL.createObjectURL(file);
    console.log(filePath);

    // uploadFile(e.target.files[0]);
  };

  return (
    <>
      <ProductImage imageId={imageId} />
      <div className={styles.container}>
        <input
          type="file"
          accept="image/*"
          onChange={getFileInfo}
          className={styles.input}
        />
        <ImageUploadButton
          onClick={() => {
            console.log("aaa");
          }}
        />
      </div>
    </>
  );
};

export default ImageUploader;
