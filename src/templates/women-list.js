import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogList = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges
  const siteTitle = "Women of Venus"
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/faces/" : `/faces/${currentPage - 1}`
  const nextPage = `/faces/${currentPage + 1}`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="faces">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 2),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <Image 
                  fluid={node.frontmatter.face.childImageSharp.fluid}
                  alt={node.frontmatter.title}
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
              </h3>
            </header>
          </article>
        )
      })}
      </div>

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
            {!isFirst && (
			        <Link to={prevPage} rel="prev">
			          ← Page {currentPage - 1}
			        </Link>
			      )}
          </li>
          <li>
            {!isLast && (
			        <Link to={nextPage} rel="next">
			          Page {currentPage + 1} →
			        </Link>
			      )}
          </li>
        </ul>
      </nav>

    </Layout>
  )
}

export default BlogList


export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___index], order: ASC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
        	excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
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