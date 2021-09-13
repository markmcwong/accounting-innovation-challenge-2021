import { API, Auth } from "aws-amplify";
import { chooseProject, getProjects } from "actions/userActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import store from "store";
import * as mutations from "../../graphql/mutations";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import CustomModal from "components/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // @ts-ignore
  const userState = useSelector((state) => state.userState);
  const projects = useSelector(
    // @ts-ignore
    (state) => state.userState.projects
  );

  const signOut = async () => {
    try {
      await Auth.signOut();
      window.location.reload();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  useEffect(() => {
    if (projects) {
      const filtered = projects.filter(
        (x) => x.id === userState.currentProject
      );
      if (filtered.length !== 0 && filtered[0].entriesURL !== null) {
        history.push("/Categories");
      }
    }
  }, [userState.currentProject]);

  const renderTooltip = (name) => <Tooltip id="button-tooltip">{name}</Tooltip>;

  const addNewProject = async (projectName = "New Project") => {
    try {
      await API.graphql({
        query: mutations.createProject,
        variables: {
          input: {
            projectName: projectName,
            owner: userState.user.attributes.sub,
            bookIncomplete: [
              "Cash",
              "Purchase",
              "Return Inwards",
              "Return Outwards",
              "Bank",
            ],
          },
        },
      });

      dispatch(getProjects(userState.user.attributes.sub));
    } finally {
    }
  };

  return (
    <div className="flex-col flex position-fixed pt-4 text-xl theme-colour justify-content-start w-28 h-full border-r-2 navbar z-10">
      <CustomModal
        show={show}
        handleClose={handleClose}
        confirm={(name) => addNewProject(name)}
      />
      Projects
      <div
        className="text-4xl border-1 m-4 flex rounded-full items-center justify-center h-12 w-12 theme-colour cursor-pointer"
        onClick={() => handleShow()}
      >
        +
      </div>
      <div className="flex-1 flex flex-col max-h-5/6 h-full">
        <div className="overflow-y-auto h-full">
          {userState.projects &&
            userState.projects.map((item, index) => (
              <OverlayTrigger
                placement="right"
                delay={{ show: 100, hide: 200 }}
                overlay={renderTooltip(item.projectName)}
              >
                <div
                  key={index}
                  className={
                    "text-2xl border-1 mt-3 flex rounded-xl items-center justify-center h-12 w-12 theme-colour cursor-pointer " +
                    (userState.currentProject === item.id ? "active" : "")
                  }
                  onClick={() => {
                    history.push("/");
                    dispatch(chooseProject(item.id));
                  }}
                >
                  {item.projectName[0].toUpperCase()}
                </div>
              </OverlayTrigger>
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
