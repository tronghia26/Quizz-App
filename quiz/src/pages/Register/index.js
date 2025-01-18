import { checkExist, register } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faFont } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Register.scss";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const checkExistEmail = await checkExist("email", email);

    if (checkExistEmail.length > 0) {
      alert("Email đã tồn tại!");
    } else {
      const options = {
        fullName: fullname,
        email: email,
        password: password,
        token: generateToken(),
      };

      const response = await register(options);
      if (response) {
        navigate("/login");
      } else {
        alert("Đăng ký không thành công");
      }
    }
  };

  return (
    <>
      <div className="register-content">
        <h2>Đăng ký</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faFont} className="icon" />
            <input type="fullname" placeholder="Nhập fullname" required />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="email" placeholder="Nhập email" required />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type="password" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit" className="btn">
            Đăng ký
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
