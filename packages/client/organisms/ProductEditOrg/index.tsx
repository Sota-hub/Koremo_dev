import React, { FC, useState, useEffect } from "react";
import { Router } from "next/router";
import ImageUploader from "../../molecules/ImageUploader";
import ProductInputs from "../../molecules/ProductInputs";
import Button from "../../molecules/Button";
import Loader from "../../atoms/Loader";
import {
  useProductQuery,
  useUpdateProductMutation,
} from "@koremo/graphql-client";
import { BgColor, TextColor } from "@koremo/enums";
import { Input } from "../../types/inputAndSetInput";
import { SetMessageProps } from "../../types/setMessage";
import styles from "./styles.module.css";

interface ProductEditOrgProps extends SetMessageProps {
  router: Router;
}

const initialState = {
  imageId: null,
  product: "",
  shop: "",
  price: "",
  supplement: "",
};

const ProductEditOrg: FC<ProductEditOrgProps> = (props) => {
  const { setMessage } = props;
  const productId = props.router.query.productId as string;
  const [input, setInput] = useState<Input>(initialState);
  const [updateProductFunction] = useUpdateProductMutation();
  const { loading, error, data } = useProductQuery({
    variables: {
      id: productId,
    },
  });

  useEffect(() => {
    if (loading || error || !data || !data.product) {
      return;
    }
    setInput({
      imageId: data.product.productImageId || null,
      product: data.product.productName,
      shop: data.product.shopName,
      price: data.product.price,
      supplement: data.product.supplement || "",
    });
  }, [loading, error, data]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (!data) {
    return <span>Something went wrong</span>;
  }

  const updateProductRequest = async () => {
    try {
      await updateProductFunction({
        variables: {
          input: {
            id: productId,
            productImageId: input.imageId,
            productName: input.product,
            shopName: input.shop,
            price: input.price,
            supplement: input.supplement,
          },
        },
      });
      setMessage("Product is updated");
    } catch (e) {
      const error = e as Error;
      setMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <ImageUploader imageId={input.imageId} setInput={setInput} />
      </div>
      <div>
        <div className={styles.inputs}>
          <ProductInputs input={input} setInput={setInput} />
        </div>
        <div className={styles.button}>
          <Button
            bgColor={BgColor.Pink}
            text="Update"
            textColor={TextColor.White}
            onClick={updateProductRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductEditOrg;
