import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ButtonIconProps } from "../../types/buttonIcon";
import styles from "./styles.module.css";

const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { src, alt } = props;

  if (!src || !alt) {
    return <></>;
  }

  return (
    <div className={styles.icon}>
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
};

export default ButtonIcon;
