// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Image from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      <p
        style={{
          fontSize: rhythm(0.75),
        }} 
      >
        There is a planet far, far away. Its surface is marked by many holes and craters. In each crater is an Earthling woman. Each woman was specifically chosen to inhabit this harsh, hot planet. But why? 
        <br/>
        <br/>
        Who are these women?
        <br />
        <br />
        Let us introduce you:
     

      <div
        style={{
          paddingLeft: rhythm(0.5),
        }}
      >
        <Link
          to='/faces/'
        >
          - Meet all the women
        </Link>
      </div>

      <div
        style={{
          paddingLeft: rhythm(0.5),
        }}
      >
        <Link
          to='/categories/'
        >
          - Meet the women by category
        </Link>
      </div>

      <div
        style={{
          paddingLeft: rhythm(0.5),
        }}
      >
        <Link
          to='/faces/'
        >
          - Meet one woman at random
        </Link>
      </div>

      </p>
     
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
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
