import React, { FC } from "react";
import { Router } from "next/router";
import Loader from "../../atoms/Loader";
import ProductImage from "../../atoms/ProductImage";
import ProductItems from "../../molecules/ProductItems";
import Button from "../../molecules/Button";
import { useProductQuery } from "@koremo/graphql-client";
import { BgColor, TextColor } from "@koremo/enums";
import styles from "./styles.module.css";

interface HomeDetailOrgProps {
  router: Router;
}

const HomeDetailOrg: FC<HomeDetailOrgProps> = (props) => {
  const productId = props.router.query.productId as string;
  const { loading, error, data } = useProductQuery({
    variables: {
      id: productId,
    },
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (!data) {
    return <span>Something went wrong</span>;
  }

  const { product } = data;

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <ProductImage imageId={product.productImageId || null} />
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <ProductItems product={product} />
        </div>
        <div className={styles.item}>
          <Button
            bgColor={BgColor.Pink}
            text="Check as Bought"
            textColor={TextColor.White}
            onClick={() => {
              console.log("ase");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDetailOrg;
