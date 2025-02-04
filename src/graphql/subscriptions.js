/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSquad = /* GraphQL */ `
  subscription OnCreateSquad($filter: ModelSubscriptionSquadFilterInput) {
    onCreateSquad(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSquad = /* GraphQL */ `
  subscription OnUpdateSquad($filter: ModelSubscriptionSquadFilterInput) {
    onUpdateSquad(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSquad = /* GraphQL */ `
  subscription OnDeleteSquad($filter: ModelSubscriptionSquadFilterInput) {
    onDeleteSquad(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      postID
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      postID
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      postID
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $email: String
  ) {
    onCreatePost(filter: $filter, email: $email) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $email: String
  ) {
    onUpdatePost(filter: $filter, email: $email) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $email: String
  ) {
    onDeletePost(filter: $filter, email: $email) {
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
