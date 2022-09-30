import React, { FC, useState, useCallback } from "react";
import { Router } from "next/router";
import Button from "../../molecules/Button";
import Input from "../../atoms/Input";
import Separator from "../../atoms/Separator";
import ErrorMessage from "../../atoms/ErrorMessage";
import styles from "./styles.module.css";
import { emailExpression, passwordExpression } from "@koremo/constants";
import { BgColor, TextColor } from "@koremo/enums";
import { Google } from "../../public/images";

interface SignupOrgProps {
  router: Router;
}

const signupUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/signup`;
const oauthUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth`;

const SignupOrg: FC<SignupOrgProps> = (props) => {
  const { router } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confPassError, setConfPassError] = useState(false);
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const validation = (email: string, password: string, confPass: string) => {
    const emailTest = emailExpression.test(email);
    const passwordTest = passwordExpression.test(password);
    const confPassTest = password === confPass;

    if (emailTest && passwordTest && confPassTest) {
      return true;
    }

    if (!emailTest) {
      setEmailError(true);
    }
    if (!passwordTest) {
      setPasswordError(true);
    }
    if (!confPassTest) {
      setConfPassError(true);
    }
    return false;
  };

  const localSignupRequest = async () => {
    if (!validation(email, password, confPass)) {
      return;
    } else {
      try {
        const response = await fetch(signupUrl, {
          method: "post",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confPass,
          }),
        });
        const data: boolean = await response.json();
        if (data) {
          router.replace("/login");
        }
      } catch (e) {
        const error = e as Error;
        setSignupErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <h1 className={styles.headline}>SIGN UP</h1>
      <div className={styles.flex}>
        <div className={styles.flexItem1}>
          <form className={styles.form}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={useCallback((v: string) => setEmail(v), [])}
            />
            {emailError && <ErrorMessage message="Invalid email address" />}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={useCallback((v: string) => setPassword(v), [])}
            />
            {passwordError && <ErrorMessage message="Invalid password" />}
            <Input
              type="password"
              name="passConf"
              placeholder="Confirm Password"
              onChange={useCallback((v: string) => setConfPass(v), [])}
            />
            {confPassError && (
              <ErrorMessage message="Confirm password doesn't match" />
            )}
          </form>
          <Button
            bgColor={BgColor.Blue}
            text="SIGN UP"
            textColor={TextColor.White}
            onClick={localSignupRequest}
          />
          {signupErrorMessage && <ErrorMessage message={signupErrorMessage} />}
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

export default SignupOrg;
