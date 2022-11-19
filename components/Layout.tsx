import React, { ReactNode } from "react";
import Navbar from "./Navbar";

// type LayoutProps = React.PropsWithChildren<{}>;

type LayoutProps = {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>
  <Navbar />
  {children}
  </>;
}
