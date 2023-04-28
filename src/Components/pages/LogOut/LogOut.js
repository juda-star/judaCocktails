import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../../redux/feature/userSlice";

function LogOut() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div>
      <h1>
        Welcome <span>{}</span>
        <button onClick={(e) => handleLogOut(e)}>LogOut</button>
      </h1>
    </div>
  );
}

export default LogOut;
