import React, { FC } from "react";
import { Router } from "next/router";
import Button from "../../molecules/Button";
import Input from "../../atoms/Input";
import Separator from "../../atoms/Separator";
import styles from "./styles.module.css";
import { BgColor, TextColor } from "@koremo/enums";
import { Google } from "../../public/images";

const loginUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/login`;
const oauthUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth`;

const LoginOrg: FC = (props) => {
  return (
    <>
      <h1 className={styles.headline}>LOGIN</h1>
      <div className={styles.flex}>
        <div className={styles.flexItem1}>
          <form
            action={loginUrl}
            method="post"
            id="local"
            className={styles.form}
          >
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Password" />
          </form>
          <Button
            bgColor={BgColor.Blue}
            form="local"
            text="LOGIN"
            textColor={TextColor.White}
          />
        </div>
        <div>
          <Separator vertical={true} />
        </div>
        <div className={styles.flexItem1}>
          <form
            action={oauthUrl}
            method="post"
            id="oauth"
            className={styles.form}
          />
          <Button
            bgColor={BgColor.Transparent}
            form="oauth"
            src={Google}
            alt="google"
            text="Login with Google"
            textColor={TextColor.Black}
          />
        </div>
      </div>
    </>
  );
};

export default LoginOrg;
