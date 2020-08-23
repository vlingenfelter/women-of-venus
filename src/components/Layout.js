import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div>
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign: `center`,
        }}
      >
        {title}
      </h1>
      <nav>
        <Link 
          to={`/categories`}
        >
          by category
        </Link>
        <Link 
          to={`/faces`}
        >
          by face
        </Link>
        <Link 
          to={`/faces`}
        >
          at random
        </Link>
      </nav>
      </div>
    )
  } else {
    header = (
      <nav>
        <h3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            Women of Venus
          </Link>
        </h3>
        <Link 
          to={`/categories`}
        >
          by category
        </Link>
        <Link 
          to={`/faces`}
        >
          by face
        </Link>
        <Link 
          to={`/faces`}
        >
          at random
        </Link>
      </nav>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{
                  marginTop: rhythm(1),
                }}>
        Made with <span style={{color:"#e77c7c"}}>❤</span> in Boston, MA
        <br />
        Powered by
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
