import React, { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { User } from "../../public/images";

interface IndexInstructionProps {
  src: any; // Find StaticImage
  alt: string;
  text: string;
}

const IndexInstruction: FC<IndexInstructionProps> = (props) => {
  const { src, alt, text } = props;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={src} alt={alt} layout="fill" />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IndexInstruction;
