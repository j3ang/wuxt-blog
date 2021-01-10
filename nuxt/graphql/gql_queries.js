export const RECENT_POSTS_QUERY = `
{
  posts(first: 5) {
    edges {
      node {
        slug
        title
        databaseId
        tags {
          nodes {
            name
            databaseId
          }
        }
        excerpt
        featuredImage {
          node {
            mediaItemUrl
            sourceUrl
            caption(format: RENDERED)
          }
        }
        modified
        date
        author {
          node {
            avatar {
              url
            }
            nickname
            nicename
            name
          }
        }
        categories {
          nodes {
            name
            databaseId
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  } 
}
`