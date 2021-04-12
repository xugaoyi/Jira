// 登录组件

import { useAuth } from "context/auth-context";
import { FormEvent } from "react";
// const apiUrl = process.env.REACT_APP_API_URL; // 读取环境变量参数

export const LoginScreen = () => {
  const { login, user } = useAuth(); // 取出：login登录事件，user登录后的用户信息

  // 处理登录
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止默认事件
    const inputsEl = event.currentTarget.elements;
    const username = (inputsEl[0] as HTMLInputElement).value;
    const password = (inputsEl[1] as HTMLInputElement).value;
    // register({ username, password }) // 注册
    login({ username, password }); // 登录
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登录成功，用户名： {user.name}</div> : null}
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

    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="username">用户名</label>
    //     <input type="text" id="username" />
    //   </div>
    //   <div>
    //     <label htmlFor="password">密码</label>
    //     <input type="password" id="password" />
    //   </div>
    //   <button type="submit">注册</button>
    // </form>
  );
};

// interface Base {
//   id: number;
// }

// interface Advance extends Base {
//   name: string
// }

// const test = (p: Base) => { }

// // 这里的并没有报类型错误，只要传入参数包含Base类型内的id就可以。 这称之为：鸭子类型： TS是面向接口编程 而不是 面向对象编程
// const a = { id: 1, name: '123', c: '234' }
// test(a)
