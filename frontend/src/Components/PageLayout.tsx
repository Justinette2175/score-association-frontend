import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from "react";
import { Header } from "./Header";
import { Helmet } from "./Helmet";

type PageLayoutProps = {
  title?: string;
};

export function PageLayout({
  title,
  children
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <React.Fragment>
      <Helmet title={title || ""} />
      <div className="bg-black min-h-screen">
        <div className="fixed w-screen z-30 transition ease-in-out duration-300 h-header">
          <Header />
        </div>
        <div className="pb-12 pt-header px-8 grid grid-flow-row gap-12">
          <div>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
