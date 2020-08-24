import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import kebabCase from "lodash/kebabCase"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.title}
          </h1>
        </header>

         <Image 
            fluid={post.frontmatter.face.childImageSharp.fluid} 
            alt={post.frontmatter.title}
            style={{
              marginBottom: 0,
              maxWidth: 600,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          
        <section dangerouslySetInnerHTML={{ __html: post.html }} 
           style={{
             marginTop: rhythm(1)
           }}
        />
       <p> {post.frontmatter.tags.map((tag) => 
          ( <Link className="tag" to={`/categories/${kebabCase(tag)}/`}> {tag} < /Link>)
            )} 
        </p>
        
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        face {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90, traceSVG: { color: "#e77c7c"}) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`
