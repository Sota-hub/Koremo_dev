import React, { FC } from "react";
import { Router } from "next/router";
import Loader from "../../atoms/Loader";
import ProductImage from "../../atoms/ProductImage";
import ProductItems from "../../molecules/ProductItems";
import Button from "../../molecules/Button";
import {
  useProductQuery,
  useCheckProductMutation,
} from "@koremo/graphql-client";
import { BgColor, TextColor } from "@koremo/enums";
import { ProductStatus } from "@koremo/enums";
import { SetMessageProps } from "../../types/setMessage";
import styles from "./styles.module.css";

interface HomeDetailOrgProps extends SetMessageProps {
  router: Router;
}

const HomeListDetailOrg: FC<HomeDetailOrgProps> = (props) => {
  const { setMessage } = props;
  const productId = props.router.query.productId as string;
  const [checkProductFunction] = useCheckProductMutation();
  const { loading, error, data, refetch } = useProductQuery({
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

  const checkProductRequest = async () => {
    try {
      await checkProductFunction({
        variables: {
          productId: product.id,
        },
      });
      setMessage("Product is checked as bought");
      refetch();
    } catch (e) {
      const error = e as Error;
      setMessage(error.message);
    }
  };

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
            onClick={checkProductRequest}
            disabled={product.status === ProductStatus.Bought ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeListDetailOrg;
