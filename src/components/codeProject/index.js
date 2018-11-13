import React from 'react'
import Tag from '../tag'

const CodeProject = ({ title, description, tags, showcase, year, repo }) => (
  <article
    style={{
      paddingBottom: '6em',
    }}
  >
    <h2
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <sub
        style={{
          fontSize: '.5em',
          fontWeight: 'normal',
        }}
      >
        {year}
      </sub>
    </h2>
    {description.map(line => (
      <p>{line}</p>
    ))}
    <footer
      style={{
        marginTop: '1em',
      }}
    >
      {showcase && (
        <>
          view the{' '}
          <a href={showcase} target="_blank" rel="noopener noreferrer">
            project
          </a>
        </>
      )}
      {repo && (
        <>
          <span> </span>
          and the{' '}
          <a href={repo} target="_blank" rel="noopener noreferrer">
            code
          </a>
        </>
      )}
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          margin: '2em 0 0 0',
        }}
      >
        {tags.map(tag => (
          <Tag text={tag} />
        ))}
      </ul>
    </footer>
  </article>
)
export default CodeProject
