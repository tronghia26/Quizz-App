import { checkExist, register } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";

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

    // if (response.length > 0) {
    //   console.log(response);
    //   setCookie("id", response[0].id, 1);
    //   setCookie("fullname", response[0].fullname, 1);
    //   setCookie("email", response[0].email, 1);
    //   setCookie("token", response[0].token, 1);
    //   dispatch(checkLogin(true));
    //   navigate("/");
    // } else {
    //   alert("Tài khoản hoặc mật khẩu không đúng!");
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <input type="fullname" placeholder="Nhập fullname" />
        </div>
        <div>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
