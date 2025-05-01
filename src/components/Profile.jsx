import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1> Email : {user?.email}</h1>
      <h1>UID : {user?.uid}</h1>
      <figure className="diff min-h-[50vh]" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <img
            alt="daisy"
            src="https://i.ibb.co.com/wF7z9tHG/1717414834315.jpg"
          />
        </div>
        <div className="diff-item-2" role="img">
          <img
            alt="daisy"
            src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="diff-resizer"></div>
      </figure>
    </div>
  );
};

export default Profile;
