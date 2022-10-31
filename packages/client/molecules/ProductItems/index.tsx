import React, { FC } from "react";
import ProductItem from "../../atoms/ProductItem";
import { Product } from "@koremo/graphql-client";
import styles from "./styles.module.css";

interface ProductItemsProps {
  product: Product;
}

const ProductItems: FC<ProductItemsProps> = (props) => {
  const { product } = props;

  return (
    <div className={styles.container}>
      <ProductItem headline="Product" text={product.productName} />
      <ProductItem headline="Shop" text={product.shopName} />
      <ProductItem headline="Price" text={product.price} />
      <ProductItem headline="Supplement" text={product.supplement || ""} />
    </div>
  );
};

export default ProductItems;
