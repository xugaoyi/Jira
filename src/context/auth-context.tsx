import React, { useState, ReactNode } from "react";
import { User } from "screens/project-list/search-panel";
import * as auth from "auth-provider";

// 这里指定一个泛型后，在后面的返回值中就不会固执的认为它是默认值undefined类型 （Auth => 身份验证）
const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

interface AuthForm {
  username: string;
  password: string;
}

//（provider => 提供者）
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AuthForm) => auth.login(form).then(setUser); // 这里直接写setUser等同于写user => setUser(user)，术语称为：point free, 类似于消参
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

// 身份验证的自定义hook
export const useAuth = () => {
  // useContext是原生hook
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};

// 整个项目都可以使用这个hook，示例：
// const { login, user } = useAuth();
