// 注册组件
import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

export const RegisterScreen = () => {
  const { register } = useAuth();

  // 处理登录
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止默认事件
    const inputsEl = event.currentTarget.elements;
    const username = (inputsEl[0] as HTMLInputElement).value;
    const password = (inputsEl[1] as HTMLInputElement).value;
    register({ username, password }); // 注册
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
