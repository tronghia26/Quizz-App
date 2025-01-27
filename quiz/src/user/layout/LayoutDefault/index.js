import { NavLink, Outlet } from "react-router-dom";
import "../../styles/LayoutDefault.scss";
// import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getCookie } from "../../helpers/cookie";

function LayoutDefault() {
  // const token = getCookie("token");

  const isLogin = useSelector((state) => state.loginReducer);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li>
                <NavLink to="/introduce">Giới thiệu</NavLink>
              </li>
              <li>
                <NavLink to="/topic">Chủ đề thi</NavLink>
              </li>
              <li>
                <NavLink to="/answers">Lịch sử làm bài</NavLink>
              </li>
              <li>
                <NavLink to="/document">Tài liệu</NavLink>
              </li>
            </ul>
          </div>
          <div className="layout-default__account">
            {isLogin ? (
              <>
                <div className="user-profile">
                  <div
                    className="user-profile__avatar"
                    onClick={toggleDropdown}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                  </div>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="user-profile__dropdown">
                      <div className="user-profile__info">
                        <p className="user-profile__name">
                          {getCookie("email")}
                        </p>
                        <p className="user-profile__email">
                          {getCookie("email")}
                        </p>
                      </div>
                      <ul className="user-profile__menu">
                        <li>
                          <NavLink to="/profile">Trang cá nhân</NavLink>
                        </li>
                        <li>
                          <NavLink to="/logout" onClick={toggleDropdown}>
                            Đăng xuất
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <NavLink to="/login" className="button">
                  Đăng nhập
                </NavLink>
              </>
            )}
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet />
        </main>
        <footer className="layout-default__footer">
          <p>
            &copy; {new Date().getFullYear()} QuizMaster. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
