import React, { FC, useState, useCallback } from "react";
import RemindCheckbox from "../../molecules/RemindCheckbox";
import Button from "../../molecules/Button";
import Input from "../../atoms/Input";
import Separator from "../../atoms/Separator";
import styles from "./styles.module.css";
import { BgColor, TextColor } from "@koremo/enums";
import { Google } from "../../public/images";

const emailExpression =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
const passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/; //eslint-disable-line

const SignupOrg: FC = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confPassError, setConfPassError] = useState(false);

  const validateEmail = (email: string) => {
    if (emailExpression.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const validatePassword = (password: string) => {
    if (passwordExpression.test(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  const validateConfPass = (confPass: string) => {
    if (password === confPass) {
      setConfPassError(false);
    } else {
      setConfPassError(true);
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
            <Input
              type="password"
              placeholder="Password"
              onChange={useCallback((v: string) => setPassword(v), [])}
              />
            <Input
              type="password"
              placeholder="Confirm Password"
              onChange={useCallback((v: string) => setConfPass(v), [])}
              />
          </form>
          <RemindCheckbox />
          <Button
            bgColor={BgColor.Blue}
            text="SIGN UP"
            textColor={TextColor.White}
            onClick={() => {
              console.log(email, password, confPass);
            }}
            />
        </div>
        <div>
          <Separator vertical={true}/>
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
