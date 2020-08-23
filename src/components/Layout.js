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
      </div>
    )
  } else {
    header = (
      <nav
        className='nav'
        style={{
          marginBottom: rhythm(1)
        }}
      >
        <h3
          style={{
            marginBottom: rhythm(0.25),
          }}
        >
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
        <div
          className="navLinkWrapper"
        >
        <Link 
          className="navLink"
          to={`/categories`}
        >
          by category
        </Link>
        <Link 
          className="navLink"
          to={`/faces`}
        >
          by face
        </Link>
        <Link 
          className="navLink"
          to={`/faces`}
        >
          at random
        </Link>
        </div>
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
        <Link to="/about/">About this project</Link>
        <br / >
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
