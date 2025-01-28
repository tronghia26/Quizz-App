import React, { useState, useEffect } from "react";
import "../../styles/Profile.scss"; // File SCSS cho trang
import { getCookie } from "../../helpers/cookie";

function Profile() {
  const userInfo = {
    name: getCookie("fullName"),
    email: getCookie("email"),
    avatar: "",
  };

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
