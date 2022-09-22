import React, { FC } from "react";
import styles from "./styles.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  const { message } = props;

  return <label className={styles.message}>{message}</label>;
};

export default ErrorMessage;
