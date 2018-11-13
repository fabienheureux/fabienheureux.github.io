import React from 'react'

const Tag = ({ text }) => (
  <p
    style={{
      background: '#f3f3f3',
      margin: '0 1em 0 0',
      fontSize: '.75em',
      padding: '.25em 1em',
      fontWeight: 'bolder',
    }}
  >
    {text}
  </p>
)

export default Tag
