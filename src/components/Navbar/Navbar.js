import { Auth } from "aws-amplify";
import { chooseProject } from "actions/userActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import store from "store";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  // @ts-ignore
  const userState = useSelector((state) => state.userState);

  const signOut = async () => {
    try {
      await Auth.signOut();
      // window.location.reload();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <div className="flex-col flex position-fixed pt-4 text-xl theme-colour justify-content-start w-28 h-full border-r-2 navbar z-10">
      Projects
      <div className="text-4xl border-1 m-4 flex rounded-full items-center justify-center h-12 w-12 theme-colour">
        +
      </div>
      <div className="flex-1 flex flex-col max-h-5/6 h-full">
        <div className="overflow-y-auto h-full">
          {userState.projects &&
            userState.projects.map((item) => (
              <div
                className={
                  "text-2xl border-1 mt-3 flex rounded-xl items-center justify-center h-12 w-12 theme-colour cursor-pointer " +
                  (userState.currentProject === item.projectName
                    ? "active"
                    : "")
                }
                onClick={() => dispatch(chooseProject(item.projectName))}
              >
                {item.projectName[0].toUpperCase()}
              </div>
            ))}
        </div>
        <IoLogOutOutline
          size="36"
          className="my-4 m-auto cursor-pointer"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
}
