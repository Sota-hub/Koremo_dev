import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";
import Header from "../organisms/Header";

const Login: PageFC = (props) => {
  const { router, currentUser } = props; 

  return (
    <>
      <Header />
    </>
  )
}

export const getStaticProps = titleSSG("Login Page");

export default Login;