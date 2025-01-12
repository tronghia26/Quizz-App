import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isLogin = useSelector((state) => state.loginReducer);

  if (!isLogin) {
    alert("Đăng nhập để xem");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
