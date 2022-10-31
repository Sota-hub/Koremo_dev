import React, { FC } from "react";
import { Router } from "next/router";
import ProductImage from "../../atoms/ProductImage";
import ProductItems from "../../molecules/ProductItems";
import LinkButton from "../../atoms/LinkButton";
import Button from "../../molecules/Button";
import Loader from "../../atoms/Loader";
import {
  useProductQuery,
  useDeleteProductMutation,
} from "@koremo/graphql-client";
import { BgColor, TextColor } from "@koremo/enums";
import { SetMessageProps } from "../../types/setMessage";
import styles from "./styles.module.css";

interface ProductOrgProps extends SetMessageProps {
  router: Router;
}

const ProductOrg: FC<ProductOrgProps> = (props) => {
  const { router, setMessage } = props;
  const productId = router.query.productId as string;
  const [deleteProductFunction] = useDeleteProductMutation();
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

  const deleteProductRequest = async () => {
    try {
      await deleteProductFunction({
        variables: {
          productId: product.id,
        },
      });
      setMessage("Product is deleted");
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
          <LinkButton path={`/list/${productId}/edit`} text="Edit" />
          <Button
            bgColor={BgColor.Pink}
            text="Delete"
            textColor={TextColor.White}
            onClick={deleteProductRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOrg;
