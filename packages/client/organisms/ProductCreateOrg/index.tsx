import React, { FC, useState } from "react";
import ImageUploader from "../../molecules/ImageUploader";
import ProductInputs from "../../molecules/ProductInputs";
import Button from "../../molecules/Button";
import { useCreateProductMutation, User } from "@koremo/graphql-client";
import { SetMessageProps } from "../../types/setMessage";
import { Input } from "../../types/inputAndSetInput";
import { BgColor, TextColor } from "@koremo/enums";
import styles from "./styles.module.css";

interface ProductCreateOrgProps extends SetMessageProps {
  currentUser: User;
}

const initialState = {
  imageId: null,
  product: "",
  shop: "",
  price: "",
  supplement: "",
};

const ProductCreateOrg: FC<ProductCreateOrgProps> = (props) => {
  const { currentUser, setMessage } = props;
  const [input, setInput] = useState<Input>(initialState);
  const [createProductFunction] = useCreateProductMutation();

  const createProductRequest = async () => {
    try {
      await createProductFunction({
        variables: {
          input: {
            ownerId: currentUser.id,
            productImageId: input.imageId,
            productName: input.product,
            shopName: input.shop,
            price: input.price,
            supplement: input.supplement || null,
          },
        },
      });
      setMessage("Product is added in your list!");
      setInput(initialState);
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
            text="Create"
            textColor={TextColor.White}
            onClick={createProductRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreateOrg;
