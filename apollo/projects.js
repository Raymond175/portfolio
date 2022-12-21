import { gql } from "@apollo/client";

export const getProjects = gql(
  `query getProjects {
    projects(orderBy: updatedAt_DESC) {
        updatedAt
        title
        stage
        description
        id
        techUsed
        projectDate
        mainImage {
          url
        }
        }
    }`
)

export const getProjectBySlug = gql(
  `query getProjectsBySlug($slug: String!) {
        projects(where: { slug: $slug }) {
          title
          slug
          content
        }
    }`
)

export const getProjectSlugs = gql(
  `query GetProjectsSlugs {
        projects {
          slug
        }
      }`
)

