import React, { FC } from "react";
import Checkbox from "../../atoms/Checkbox";
import Label from "../../atoms/Label";
import styles from "./styles.module.css";
import { CheckboxProps } from "../../types/checkbox";

const RemindCheckbox: FC<CheckboxProps> = (props) => {
  const { checked, onChange } = props;

  return (
    <div className={styles.container}>
      <Checkbox checked={checked} onChange={onChange} />
      <Label htmlFor="checkbox" text="Remind me" />
    </div>
  );
};

export default RemindCheckbox;
