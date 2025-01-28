import React, { useState, useEffect } from "react";
import "../../styles/Profile.scss"; // File SCSS cho trang

function Profile() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150",
  });

  // Fetch user data if needed (mocked here)
  useEffect(() => {
    // Giả sử bạn có API gọi đến thông tin người dùng
    // fetchUserInfo().then(data => setUserInfo(data));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      <div className="profile-info">
        <div className="profile-avatar">
          <img src={userInfo.avatar} alt="Avatar" />
        </div>
        <div className="profile-details">
          <p>
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {userInfo.email}
          </p>
        </div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
}

export default Profile;
