import { LOGIN, CHOOSE_PROJECT, GET_PROJECTS } from "actions/types";

const initialState = { currentProject: null, projects: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };
    case CHOOSE_PROJECT:
      return {
        ...state,
        currentProject: action.payload.currentProject,
      };
    case GET_PROJECTS:
      console.log(action.payload.data.listProjects.items);
      return {
        ...state,
        projects: action.payload.data.listProjects.items,
      };
    default:
      return state;
  }
}
