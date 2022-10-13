import React, { FC } from "react";
import styles from "./styles.module.css";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: FC<AddButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      Add
    </button>
  );
};

export default AddButton;
