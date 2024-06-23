'use client';

import { Provider } from "react-redux";
import { store } from "./(components)/store/store";

export function Providers({
    children,
  }:Readonly<{
    children: React.ReactNode;
  }>) {
    return <Provider store={store}>{children}</Provider>;
  }