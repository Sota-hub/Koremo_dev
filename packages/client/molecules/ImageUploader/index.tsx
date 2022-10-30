import React, { FC, useState, ChangeEvent } from "react";
import ProductImage from "../../atoms/ProductImage";
import ImageUploadButton from "../../atoms/ImageUploadButton";
import {
  useUploadImageMutation,
  UploadImageInput,
} from "@koremo/graphql-client";
import { ProductImageProps } from "../../types/productImage";
import { SetInputProps } from "../../types/inputAndSetInput";
import styles from "./styles.module.css";

interface ImageUploaderProps extends ProductImageProps, SetInputProps {}

const ImageUploader: FC<ImageUploaderProps> = (props) => {
  const { imageId, setInput } = props;
  const [file, setFile] = useState<UploadImageInput | null>(null);
  const [uploadImageFunction] = useUploadImageMutation();

  const onSetFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        if (!e.target || !e.target.result) {
          return;
        }
        const result = e.target.result as string;
        const body = result.split(",")[1];
        setFile({
          fileBody: body,
          fileName: file.name,
          fileType: file.type,
        });
      };
    }
  };

  const uploadImageRequest = async (file: UploadImageInput) => {
    const { fileBody, fileName, fileType } = file;
    try {
      const response = await uploadImageFunction({
        variables: {
          input: {
            fileBody,
            fileName,
            fileType,
          },
        },
      });
      if (!response.data) {
        return console.log("There is no response data");
      }
      const imageId = response.data.uploadImage.imageId;
      setInput((prev) => ({
        ...prev,
        imageId,
      }));
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }
  };

  return (
    <>
      <ProductImage imageId={imageId} />
      <div className={styles.container}>
        <input
          className={styles.input}
          type="file"
          accept="image/*"
          onChange={onSetFile}
        />
        <ImageUploadButton
          onClick={() => {
            if (file) {
              uploadImageRequest(file);
            }
          }}
        />
      </div>
      <p className={styles.attention}>
        * File size limit is approximately 1 MB
      </p>
    </>
  );
};

export default ImageUploader;
