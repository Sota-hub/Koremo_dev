import React, { FC } from "react";
import { Router } from "next/router";
import { useUserQuery } from "@koremo/graphql-client";
import { PageFC } from "../../types";
import Loader from "../../atoms/Loader";

interface AuthProps {
  router: Router;
}

const auth = (Component: PageFC) => {
  const Auth: FC<AuthProps> = (props) => {
    console.log(document.cookie);
    const { router } = props;
    const { loading, error, data } = useUserQuery();

    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <span>{error.message}</span>;
    }
    if (!data) {
      return <span>Something went wrong</span>;
    }

    return <Component router={router} currentUser={data.user} />;
  };
  return Auth;
};

export default auth;
