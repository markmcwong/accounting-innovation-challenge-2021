/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($id: ID, $projectName: String, $owner: ID) {
    onCreateProject(id: $id, projectName: $projectName, owner: $owner) {
      id
      projectName
      owner
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($id: ID, $projectName: String, $owner: ID) {
    onUpdateProject(id: $id, projectName: $projectName, owner: $owner) {
      id
      projectName
      owner
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($id: ID, $projectName: String, $owner: ID) {
    onDeleteProject(id: $id, projectName: $projectName, owner: $owner) {
      id
      projectName
      owner
    }
  }
`;
