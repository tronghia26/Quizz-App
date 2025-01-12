import { login } from "../../services/usersService";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const response = await login(email, password);
    if (response.length > 0) {
      console.log(response);
      setCookie("id", response[0].id, 1);
      setCookie("fullname", response[0].fullname, 1);
      setCookie("email", response[0].email, 1);
      setCookie("token", response[0].token, 1);
      dispatch(checkLogin(true));
      navigate("/");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng!");
    }
  };

  return (
    <>
      <div className="login-content">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="email" placeholder="Nhập email" required />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type="password" placeholder="Nhập mật khẩu" required />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Lưu mật khẩu</label>
          </div>
          <button type="submit" className="btn">
            Đăng nhập
          </button>
        </form>
        <div className="social-login">
          <p>Bằng cách khác</p>
          <div className="social-icons">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} className="icon-twitter" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faGoogle} className="icon-google" />
            </Link>
          </div>
          <div className="register">
            <NavLink to="/register" className="create-account">
              Tạo tài khoản
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
