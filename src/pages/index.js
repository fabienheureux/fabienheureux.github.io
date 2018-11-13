import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>hey, I'm Fabien 👋</h2>
    <p>
      I write <Link to="/code">code</Link>, both on the backend & the frontend.
      Mostly in JavaScript, but also a bit of Python. I am currently living in
      Paris and am always open to new projects.
    </p>
    <p>
      I take some <Link to="/photo">photos</Link> on my free time.
    </p>
    <br />
    <p>
      👀{' '}
      <a
        target="_blank"
        hrel="noopener noreferrer"
        ref="https://www.youtube.com/watch?v=MGE_61qLWm0"
      >
        se coucher tard nuit
      </a>
      .
    </p>
  </Layout>
)

export default IndexPage