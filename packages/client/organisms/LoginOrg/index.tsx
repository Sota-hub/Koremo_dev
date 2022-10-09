import React, { FC } from "react";
import Button from "../../molecules/Button";
import Input from "../../atoms/Input";
import Separator from "../../atoms/Separator";
import PlainLink from "../../atoms/PlainLink";
import styles from "./styles.module.css";
import { BgColor, TextColor } from "@koremo/enums";
import { Google } from "../../public/images";

const localLoginUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/login`;
const oauthLoginUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/google/login`;

const LoginOrg: FC = (props) => {
  return (
    <>
      <h1 className={styles.headline}>LOG IN</h1>
      <div className={styles.flex}>
        <div className={styles.flexItem1}>
          <form
            action={localLoginUrl}
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
            action={oauthLoginUrl}
            method="get"
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
      <div className={styles.link}>
        Don&apos;t have an account?
        <PlainLink href="/signup" text="SIGN UP" />
      </div>
    </>
  );
};

export default LoginOrg;
