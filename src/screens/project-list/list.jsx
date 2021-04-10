// import React from 'react' // 最新版本在渲染JSX时无需再引入React

// 搜索结果列表
export const List = ({ list, users, }) => {
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(project => <tr key={project.id}>
          <td>{project.name}</td>
          <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
        </tr>)
      }
    </tbody>
  </table>
}
