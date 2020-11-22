import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const pagesArray = data.allMarkdownRemark.edges.map((edge) => {
    const { path, title } = edge.node.frontmatter
    console.log(path)
    return <li><Link to={`/${path}`}>{title}</Link></li>
  })

  return <div><p>List of blog posts</p>
    <ul>
      {pagesArray}
    </ul>
  </div>
}

export const pageQuery = graphql`
  query Query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
}

`
