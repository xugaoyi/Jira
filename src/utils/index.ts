import { useState, useEffect } from "react";

// 排除值为0时误认为false
export const isFalsy = (value: any) => (value === 0 ? false : !value);

// 清空对象里的空值属性
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// 自定义hook的特征是内部使用了原生hook，如果未使用到原生hook的没必要写成自定义hook

// 自定义useMount Hook
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 加空数组让其只触发一次
};

// 自定义防抖hook (非传统防抖函数)
export const useDebounce = (value: any, delay = 800) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次value、delay变更后执行
    const timeout = setTimeout(() => setDebounceValue(value), delay);

    // 每次在上一个useEffect处理完以后再执行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

// 传统防抖函数：
// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function() {
//       func(...param);
//     }, delay);
//   }
// }
// const log = debounce(() => console.log('call'), 5000)
// log()
// log()
// log()
//   ...5s
// 执行！
