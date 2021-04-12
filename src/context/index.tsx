// context用于管理全局状态，类似于vuex。此文件返回一个AppProviders，需要在项目的根节点中使用，即`src/index.tsx`文件中

import { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
