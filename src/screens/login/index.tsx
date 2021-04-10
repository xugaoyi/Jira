import { FormEvent } from "react";

export const LoginScreen = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};
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
      <button type="submit">登录</button>
    </form>
  );
};

// interface Base {
//   id: number;
// }

// interface Advance extends Base {
//   name: string
// }

// // 这里声明Base类型并没有报错，只要是传入参数类型是在接口以及继承就接口上就可以。 这称之为：鸭子类型： TS是面向接口编程 而不是 面向对象编程
// const test = (p: Base) => { }

// const a = { id: 1, name: '123' }
// test(a)
