import React, { FC } from "react";
import Checkbox from "../../atoms/Checkbox";
import Label from "../../atoms/Label";
import styles from "./styles.module.css";

const RemindCheckbox: FC = (props) => {
  return (
    <div className={styles.container}>
      <Checkbox />
      <Label htmlFor="checkbox" text="Remind me" />
    </div>
  );
};

export default RemindCheckbox;
