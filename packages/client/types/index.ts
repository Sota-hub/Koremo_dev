import React from "react";
import { Router } from "next/router";
// NextRouter has less functions than Router
// export declare type NextRouter = BaseRouter & Pick<Router, 'push' | 'replace' | 'reload' | 'back' | 'prefetch' | 'beforePopState' | 'events' | 'isFallback' | 'isReady' | 'isPreview'>;
import { User } from "@koremo/graphql-client";

//このinterfaceはpages以外で使うかもしれないからこの名前にした
export interface CommonProps {
  router: Router;
  currentUser: User;
}

export type PageFC = React.FC<CommonProps>;
