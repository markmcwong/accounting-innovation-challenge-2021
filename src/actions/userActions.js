import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { CHOOSE_PROJECT, GET_PROJECTS, LOGIN } from "actions/types";
import * as queries from "../graphql/queries";
import { API } from "aws-amplify";

export function getProjects(owner) {
  return async function getProjectsThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const response = await API.graphql({
      query: queries.listProjects,
      variables: { filter: { owner: { eq: owner } } },
    });
    console.log(response.data.listProjects.items);
    dispatch({ type: GET_PROJECTS, payload: response });
  };
}

export const chooseProject = (currentProject) => ({
  type: CHOOSE_PROJECT,
  payload: { currentProject },
});

export const login = (user) => ({
  type: LOGIN,
  payload: { user },
});
