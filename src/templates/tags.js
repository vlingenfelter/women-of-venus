import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"
import Layout from "../components/layout"


const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata.title
  const tagHeader = `The ${tag}${
    totalCount === 1 ? "" : "s"
  }`

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{tagHeader}</h1>
      <div className="faces">
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter.title
            return (
              <Link style={{ boxShadow: `none` }} to={slug}>
                  <Image 
                    fluid={node.frontmatter.face.childImageSharp.fluid}
                    alt={title}
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      maxWidth: 300,
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
              
                  </Link>
            )
          })}
      </div>
      <div
        style={{
            display: `flex`,
            justifyContent: `center`,
          }}
      >
      <Link
        to='/categories/'
      >
        See all categories
      </Link>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            face {
              childImageSharp {
                fluid(maxWidth: 300, quality: 90, traceSVG: { color: "#e77c7c"}) {
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
    }
  }
`