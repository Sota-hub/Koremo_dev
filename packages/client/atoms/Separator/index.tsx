import React, { FC } from "react";
import styles from "./styles.module.css";

interface SeparatorProps {
  vertical?: boolean;
}

const Separator: FC<SeparatorProps> = (props) => {
  const {vertical=false} = props;

  return <hr className={`${styles.separator} ${vertical && styles.vertical}`} />;
};

export default Separator;
