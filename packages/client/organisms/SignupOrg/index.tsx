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
import { useLocalSignupMutation } from "@koremo/graphql-client";

const SignupOrg: FC = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confPassError, setConfPassError] = useState(false);

  // useLocalSignupMutation returns Apollo.useMutation(LocalSignupDocument, options), as in, const [localSignupFunction, {data, loading, error}] = Apollo.useMutation(LocalSignupDocument, options)
  const [localSignupFunction] = useLocalSignupMutation();

  const validation = (email: string, password: string, confPass: string) => {
    const emailTest = emailExpression.test(email);
    const passwordTest = passwordExpression.test(password);
    const confPassTest = password === confPass;

    if (emailTest && passwordTest && confPassTest) {
      setEmailError(false);
      setPasswordError(false);
      setConfPassError(false);
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
        const data = await localSignupFunction({
          variables: {
            input: {
              email,
              password,
              confPass,
            },
          },
        });
        console.log("=== Signed up! ===", data);
      } catch (e) {
        console.log("=== Error occurred... ===", e);
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
            <Input
              type="password"
              placeholder="Confirm Password"
              onChange={useCallback((v: string) => setConfPass(v), [])}
            />
            {confPassError && <ErrorMessage message="Doesn't match" />}
          </form>
          <RemindCheckbox />
          <Button
            bgColor={BgColor.Blue}
            text="SIGN UP"
            textColor={TextColor.White}
            onClick={localSignupRequest}
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
            text="Sign up with Google"
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

export default SignupOrg;
