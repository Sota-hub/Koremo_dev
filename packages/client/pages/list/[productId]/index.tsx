import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import styles from "./styles.module.css";

const Product: PageFC = (props) => {
  const { router } = props;
  const { productId } = router.query;

  return <Header />;
};

export default Product;
