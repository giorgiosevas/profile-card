import React from "react";
import profilePhoto from "../pics/profilePhoto.jpg";

export const Avatar = (photoName) => {
  return (
    <div>
      <img src={profilePhoto} alt="Profile" className="avatar" />
    </div>
  );
};
