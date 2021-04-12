import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        // 未登录等
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

// 函数如果里面使用到hook的话，那么这个函数必须是 函数组件 或 自定义hook 之一。
export const useHttp = () => {
  const { user } = useAuth();
  // Parameters 工具类型, 这里的typeof是TS的，属于静态环境运行的
  // 这里的Parameters用于提取http函数内的参数的类型
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

// 联合类型 一个`|`(或)操作符
// const my: string | number

// 类型别名
// type myS = string | number

// 工具类型用法： 用泛型传入一个其他类型，然后对它进行某种操作并返回
type Person = {
  name: string;
  age: number;
};
// // Partial使传入类型的属性变为可选属性
// const xiao: Partial<Person> = {}
// // Omit使传入类型的删除某个属性
// const xiao2: Omit<Person, 'name'> = {age: 2}
// const xiao3: Omit<Person, 'name' | 'age'> = {}
type PersonKeys = keyof Person; // "name" | 'age'
