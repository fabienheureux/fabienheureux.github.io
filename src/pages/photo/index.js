import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

const imgStyle = {
  borderRadius: '3px',
}
const ImgWrapper = ({ children }) => (
  <div
    style={{
      paddingBottom: '100px',
    }}
  >
    {children}
  </div>
)

export default props => (
  <Layout>
    <ImgWrapper>
      <Img fixed={props.data.imageOne.childImageSharp.fixed} style={imgStyle} />
    </ImgWrapper>
    <ImgWrapper>
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} style={imgStyle} />
    </ImgWrapper>
  </Layout>
)

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 700) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "3.jpg" }) {
      ...fixedImage
    }
    imageTwo: file(relativePath: { eq: "4.jpg" }) {
      ...fixedImage
    }
  }
`
