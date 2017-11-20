import React from 'react'
import styled from 'styled-components'
import Separator from '../Separator/Separator'
import PostNav from '../PostNav/PostNav'

import Button from 'react-md/lib/Buttons'
import 'font-awesome/scss/font-awesome.scss'

const StyledTitle=styled.h1`
  margin-top:20px;
  margin-bottom:10px
  font-size: 14px;
  font-weight: 300;
`
const StyledSubTitle=styled.h6`
  margin-bottom:20px
  font-size: 10px;
  font-weight: 200;
`

const Styleddiv = styled.div`
  text-align:justify;
  p {
    font-size: 18px;
    font-weight: 300;
  }
`

export default function BlogTemplate({ data, pathContext }){

  const {markdownRemark: post} = data
  const { next, prev } = pathContext

  return (
    <div>
      <StyledTitle> {post.frontmatter.title} </StyledTitle>
      <StyledSubTitle>von Achim Hannemann am {post.frontmatter.date} </StyledSubTitle>
      <Separator />
            <Styleddiv
              className="item-html"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

      <Separator />

      <PostNav prev={prev} next={next}/>
    </div>
    )

}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        image
        title
      }
    }
  }
`
