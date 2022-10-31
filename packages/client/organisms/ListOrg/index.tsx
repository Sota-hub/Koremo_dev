import React, { FC } from "react";
import Link from "next/link";
import Button from "../../molecules/Button";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import { useProductsQuery, Product } from "@koremo/graphql-client";
import { BgColor, TextColor, ProductStatus } from "@koremo/enums";
import { PageFC } from "../../types";
import styles from "./styles.module.css";

interface LinkCardProps {
  product: Product;
}

const LinkCard: FC<LinkCardProps> = (props) => {
  const { product } = props;
  const anchorClass =
    product.status === ProductStatus.Bought
      ? `${styles.item} ${styles.inaccessible}`
      : styles.item;

  return (
    <Link href={`/list/${product.id}`} passHref>
      <a className={anchorClass}>
        <div>
          <Card
            imageId={product.productImageId || null}
            mainText={product.productName}
            subText={product.shopName}
          ></Card>
        </div>
      </a>
    </Link>
  );
};

const ListOrg: PageFC = (props) => {
  const { router, currentUser } = props;
  const { loading, error, data } = useProductsQuery({
    variables: {
      userId: currentUser.id,
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

  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.headline}>Your List</h1>
        <div className={styles.button}>
          <Button
            bgColor={BgColor.Pink}
            text="Create"
            textColor={TextColor.White}
            onClick={() => {
              router.push("/list/create");
            }}
          />
        </div>
      </div>
      <div className={styles.container}>
        {data.products.map((product) => {
          if (!product) {
            return;
          }
          return <LinkCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default ListOrg;
