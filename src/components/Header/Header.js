import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  // @ts-ignore
  const project = useSelector((state) => state.userState.project);
  return (
    <div className="flex flex-column align-items-start align-self-start justify-self-start w-60">
      <span>Auditing Project For</span>
      <span className="text-3xl theme-colour">
        {project != null ? project : "project"}
      </span>
    </div>
  );
}
