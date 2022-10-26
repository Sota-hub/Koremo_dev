import React from "react";
import { PageFC } from "../../../../types";
import Header from "../../../../organisms/Header";
import ProductEditOrg from "../../../../organisms/ProductEditOrg";
import auth from "../../../../helpers/functions/auth";
import styles from "./styles.module.css";

const ProductEdit: PageFC = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductEditOrg />
      </div>
    </>
  );
};

export default ProductEdit;
