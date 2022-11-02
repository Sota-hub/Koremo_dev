import React, { FC } from "react";
import Link from "next/link";
import { Router } from "next/router";
import Loader from "../../atoms/Loader";
import Card from "../../molecules/Card";
import { useProductsQuery } from "@koremo/graphql-client";
import styles from "./styles.module.css";

interface HomeListOrgProps {
  router: Router;
}

const HomeListOrg: FC<HomeListOrgProps> = (props) => {
  const userId = props.router.query.userId as string;
  const name = props.router.query.name as string;
  const { loading, error, data } = useProductsQuery({
    variables: {
      userId: userId as string,
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
      <h1 className={styles.headline}>{name as string}&apos;s list</h1>
      <div className={styles.container}>
        {data.products.map((product) => {
          if (!product) {
            return;
          } else {
            return (
              <Link
                href={`/home/list/detail?productId=${product.id}`}
                passHref
                key={product.id}
              >
                <a className={styles.item}>
                  <Card
                    imageId={product.productImageId || null}
                    mainText={product.productName}
                    subText={product.shopName}
                  />
                </a>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default HomeListOrg;
