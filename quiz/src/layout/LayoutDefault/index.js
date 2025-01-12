import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
// import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";

function LayoutDefault() {
  // const token = getCookie("token");

  const isLogin = useSelector((state) => state.loginReducer);

  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">
            <img
              src="/assets/logo/360_F_532730425_EiwrFXiBgzIedTDr44MBmYsxYZ0opAnK.jpg"
              alt=""
            />
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {isLogin && (
                <>
                  <li>
                    <NavLink to="/topic">Topic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/answers">Answers</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="layout-default__account">
            {isLogin ? (
              <>
                <NavLink to="/logout">Đăng xuất</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">Đăng nhập</NavLink>
                <NavLink to="/register">Đăng ký</NavLink>
              </>
            )}
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet />
        </main>
        <footer className="layout-default__footer">
          Copyright # 2025 by Lê Quang Trọng Nghĩa
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
