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
export const SITE_TAGS_QUERY = `
{
   tags {
    edges {
      node {
        name
        uri
        databaseId
        count
      }
    }
  }
}
`
export const POSTS_BY_TAG_QUERY = `
  query FetchPostsByTag($Tag: String!) {
    posts(where: {tag: $Tag}) {
      pageInfo {
        endCursor
        startCursor
      }
      nodes {
        postId
        databaseId
        title(format: RENDERED)
        uri
        slug
        excerpt
        tags {
          nodes {
            name
            databaseId
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
            databaseId
            name
            slug
            uri
            link
          }
        }
      }
    }
  }
`
export const POSTS_BY_CATEGORY_QUERY = `
  query FetchPostsByCategory($Category: String!) {
    posts(where: {categoryName: $Category}) {
      pageInfo {
        endCursor
        startCursor
      }
      nodes {
        postId
        databaseId
        title(format: RENDERED)
        uri
        slug
        excerpt
        tags {
          nodes {
            name
            databaseId
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
            databaseId
            name
            slug
            uri
            link
          }
        }
      }
    }
  }
`
export const POST_BY_SLUG_QUERY = `
  query fetPostBySlug($Slug: String!) {
    postBy(slug: $Slug) {
      content(format: RENDERED)
      postId
      databaseId
      title(format: RENDERED)
      uri
      slug
      excerpt
      tags {
        nodes {
          name
          slug
          databaseId
        }
      }
      modified
      date
      author {
        node {
          nickname
          nicename
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          databaseId
          name
          slug
          uri
          link
        }
      }
    }
  }

`
