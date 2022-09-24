import React, { FC, useState, useCallback } from "react";
import { Router } from "next/router";
import RemindCheckbox from "../../molecules/RemindCheckbox";
import Button from "../../molecules/Button";
import Input from "../../atoms/Input";
import Separator from "../../atoms/Separator";
import ErrorMessage from "../../atoms/ErrorMessage";
import styles from "./styles.module.css";
import { emailExpression, passwordExpression } from "@koremo/constants";
import { BgColor, TextColor } from "@koremo/enums";
import { Google } from "../../public/images";
import {
  useLocalLoginMutation,
  useGoogleOAuthMutation,
} from "@koremo/graphql-client";

interface LoginOrgProps {
  router: Router;
}

const LoginOrg: FC<LoginOrgProps> = (props) => {
  const { router } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [localLoginFunction] = useLocalLoginMutation();
  const [googleOAuthFunction] = useGoogleOAuthMutation();

  const validation = (email: string, password: string) => {
    const emailTest = emailExpression.test(email);
    const passwordTest = passwordExpression.test(password);

    if (emailTest && passwordTest) {
      setEmailError(false);
      setPasswordError(false);
      setLoginErrorMessage("");
      return true;
    }

    if (!emailTest) {
      setEmailError(true);
    }
    if (!passwordTest) {
      setPasswordError(true);
    }
    return false;
  };

  const localLoginRequest = async () => {
    if (!validation(email, password)) {
      return;
    } else {
      try {
        const data = await localLoginFunction({
          variables: {
            input: {
              email,
              password,
              isChecked,
            },
          },
        });
        console.log(data);
      } catch (e) {
        const error = e as Error;
        console.log(error);
        setLoginErrorMessage(error.message);
      }
    }
  };

  const googleOAuthRequest = async () => {
    const data = await googleOAuthFunction();
    console.log(data);
  };

  return (
    <>
      <h1 className={styles.headline}>LOGIN</h1>
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
          </form>
          <RemindCheckbox
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <Button
            bgColor={BgColor.Blue}
            text="LOGIN"
            textColor={TextColor.White}
            onClick={localLoginRequest}
          />
          {loginErrorMessage && <ErrorMessage message={loginErrorMessage} />}
        </div>
        <div>
          <Separator vertical={true} />
        </div>
        <div className={styles.flexItem1}>
          <Button
            bgColor={BgColor.Transparent}
            src={Google}
            alt="google"
            text="Login with Google"
            textColor={TextColor.Black}
            onClick={googleOAuthRequest}
          />
        </div>
      </div>
    </>
  );
};

export default LoginOrg;
