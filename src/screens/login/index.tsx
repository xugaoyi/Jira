import { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL; // 读取环境变量参数

export const LoginScreen = () => {
  // 请求登录接口
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  // 处理登录
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止默认事件
    const inputsEl = event.currentTarget.elements;
    const username = (inputsEl[0] as HTMLInputElement).value;
    const password = (inputsEl[1] as HTMLInputElement).value;
    login({ username, password });
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

// const test = (p: Base) => { }

// // 这里的并没有报类型错误，只要传入参数包含Base类型内的id就可以。 这称之为：鸭子类型： TS是面向接口编程 而不是 面向对象编程
// const a = { id: 1, name: '123', c: '234' }
// test(a)