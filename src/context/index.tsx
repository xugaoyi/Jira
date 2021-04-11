// context用于管理全局状态，类似于vuex

import { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
