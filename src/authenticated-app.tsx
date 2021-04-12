// 登录状态的APP （分成登录状态的APP和非登录状态的APP）

// 登录后的界面
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      {/* 登录后的界面 */}
      <ProjectListScreen />
    </div>
  );
};
