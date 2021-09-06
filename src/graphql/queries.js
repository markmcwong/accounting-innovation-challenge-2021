/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!, $projectName: String!) {
    getProject(id: $id, projectName: $projectName) {
      id
      projectName
      owner
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: TableProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectName
        owner
      }
      nextToken
    }
  }
`;
