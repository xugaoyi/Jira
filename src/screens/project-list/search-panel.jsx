
// 搜索面板组件
// 子组件通过函数参数接收参数（注意传入的是一个对象）
export const SearchPanel = ({ param, setParam, users }) => {

  return <form>
    <div>
      {param.name}
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      }
      )} />
      <select value={users.name} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {/* 这里数组的map方法类似于vue的v-for */}
        {
          users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)
        }
      </select>
    </div>
  </form>
}
