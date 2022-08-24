import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";
import Header from "../organisms/Header";

const SignUp: PageFC = (props) => {
  const { router, currentUser } = props; 

  return (
    <>
      <Header />
    </>
  )
}

export const getStaticProps = titleSSG("Sign Up Page");

export default SignUp;