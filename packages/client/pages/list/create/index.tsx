import React from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import ProductCreateOrg from "../../../organisms/ProductCreateOrg";
import styles from "./styles.module.css";

const ProductCreate: PageFC = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductCreateOrg />
      </div>
    </>
  );
};

export default ProductCreate;
