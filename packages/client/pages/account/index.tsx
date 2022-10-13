import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";
import AccountOrg from "../../organisms/AccountOrg";
import auth from "../../helpers/functions/auth";
import styles from "./styles.module.css";

const Account: PageFC = (props) => {
  const { router, currentUser } = props;
  const { id, name, profileImageId } = currentUser;

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

export default auth(Account);
