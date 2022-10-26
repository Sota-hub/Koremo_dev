import React, { FC } from "react";
import styles from "./styles.module.css";

interface ImageUploadButtonProps {
  onClick: () => void;
}

const ImageUploadButton: FC<ImageUploadButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      Upload Image
    </button>
  );
};

export default ImageUploadButton;
