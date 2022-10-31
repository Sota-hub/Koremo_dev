import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import ProductOrg from "../../../organisms/ProductOrg";
import auth from "../../../helpers/functions/auth";
import styles from "./styles.module.css";

const Product: PageFC = (props) => {
  const { router } = props;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductOrg router={router} />
      </div>
    </>
  );
};

export default Product;
