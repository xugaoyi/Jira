// 登录组件

import { useAuth } from "context/auth-context";
import { Button, Form, Input } from "antd";
// const apiUrl = process.env.REACT_APP_API_URL; // 读取环境变量参数

export const LoginScreen = () => {
  const { login } = useAuth(); // 取出：login登录事件，user登录后的用户信息

  // 处理登录
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button htmlType={"submit"} type={"primary"}>
          登录
        </Button>
      </Form.Item>
    </Form>
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
