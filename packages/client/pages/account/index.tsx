import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";
import Loader from "../../atoms/Loader";
import AccountOrg from "../../organisms/AccountOrg";
import { useUserQuery } from "@koremo/graphql-client";
import styles from "./styles.module.css";

const Account: PageFC = () => {
  const { loading, error, data } = useUserQuery();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <span>{error.message}</span>;
  }
  if (!data) {
    return <span>Something went wrong</span>;
  }

  const { id, name, profileImageId } = data.user;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AccountOrg
          imageId={profileImageId ? profileImageId : null}
          userName={name}
          userId={id}
        />
      </div>
    </>
  );
};

export default Account;
