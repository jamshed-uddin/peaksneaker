import React from "react";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="mt-3 ">
      <div className="avatar">
        <div className="w-28 rounded-full ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div>
        <h1
          className="
        text-xl font-semibold"
        >
          {user?.displayName || "Users name"}
        </h1>
        <h4 className="font-light">{user?.email || "Usersemail@email.com"}</h4>
        <hr />
      </div>
    </div>
  );
};

export default UserProfile;
