// import React from 'react' // 最新版本在渲染JSX时无需再引入React
import { useEffect, useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import qs from 'qs' // 将对象转换为url参数字符串
import { cleanObject } from '../../utils'

const apiUrl = process.env.REACT_APP_API_URL // 读取环境变量参数


export const ProjectListScreen = () => {
  //  useState 类似于vue中在data定义数据
  // 输入框参数
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  // 选择器参数
  const [users, setUsers] = useState([])

  // 接口返回的数据
  const [list, setList] = useState([])

  // useEffect 每次重新渲染时会执行此钩子（挂载完成和更新完成）
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param]) // 第2个参数(数组)表示在param改变时才执行

  // 获取users数据
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, []) // 加空数组让其只触发一次

  return (
    <div>
      {/* 父组件通过子组件标签属性传参 */}
      <SearchPanel users={users} param={param} setParam={setParam} ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
