import React from 'react'
import { Link } from 'gatsby'

const Sidebar = ({ siteTitle }) => (
  <nav
    style={{
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontWeight: '900',
    }}
  >
    <Link activeClassName="active" to="/">
      <h1>fabien</h1>
    </Link>
    <Link activeClassName="active" to="/photo">
      photo
    </Link>
    <Link activeClassName="active" to="/code">
      code
    </Link>
  </nav>
)

export default Sidebar
