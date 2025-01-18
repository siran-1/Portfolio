import React from 'react'
import { graphql } from 'gatsby'

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
