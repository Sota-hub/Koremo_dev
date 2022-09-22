import React, { FC, useState, useCallback } from "react";
import RemindCheckbox from "../../molecules/RemindCheckbox";
import Button from "../../molecules/Button";
import Input from "../../atoms/Input";
import Separator from "../../atoms/Separator";
import ErrorMessage from "../../atoms/ErrorMessage";
import styles from "./styles.module.css";
import { emailExpression, passwordExpression } from "@koremo/constants";
import { BgColor, TextColor } from "@koremo/enums";
import { Google } from "../../public/images";
import { useLocalLoginMutation } from "@koremo/graphql-client";

const LoginOrg: FC = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [localLoginFunction] = useLocalLoginMutation();

  const validation = (email: string, password: string) => {
    const emailTest = emailExpression.test(email);
    const passwordTest = passwordExpression.test(password);

    if (emailTest && passwordTest) {
      setEmailError(false);
      setPasswordError(false);
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
            },
          },
        });
        console.log("=== Logged in! ===", data);
      } catch (e) {
        console.log("=== Error occurred... ===", e);
      }
    }
  };

  return (
    <>
      <h1 className={styles.headline}>LOGIN</h1>
      <div className={styles.flex}>
        <div className={styles.flexItem1}>
          <form className={styles.form}>
            <Input
              type="email"
              placeholder="Email"
              onChange={useCallback((v: string) => setEmail(v), [])}
            />
            {emailError && <ErrorMessage message="Invalid email address" />}
            <Input
              type="password"
              placeholder="Password"
              onChange={useCallback((v: string) => setPassword(v), [])}
            />
            {passwordError && <ErrorMessage message="Invalid password" />}
          </form>
          <RemindCheckbox />
          <Button
            bgColor={BgColor.Blue}
            text="LOGIN"
            textColor={TextColor.White}
            onClick={localLoginRequest}
          />
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
            onClick={() => {
              console.log("google o auth");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LoginOrg;
