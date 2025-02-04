/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSquad = /* GraphQL */ `
  query GetSquad($id: ID!) {
    getSquad(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSquads = /* GraphQL */ `
  query ListSquads(
    $filter: ModelSquadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSquads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByPostIDAndContent = /* GraphQL */ `
  query CommentsByPostIDAndContent(
    $postID: ID!
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostIDAndContent(
      postID: $postID
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      Squad {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      projectSquadId
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        projectSquadId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      email
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        email
        __typename
      }
      nextToken
      __typename
    }
  }
`;
