import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  // @ts-ignore
  const currentProject = useSelector((state) => state.userState.currentProject);
  const projects = useSelector((state) => state.userState.projects);
  return (
    <div className="flex flex-column align-items-start align-self-start justify-self-start w-1/2">
      <span>Auditing Project For</span>
      <span className="text-3xl theme-colour text-left">
        {projects &&
          currentProject &&
          projects.filter((x) => x.id === currentProject)[0].projectName}
      </span>
    </div>
  );
}
