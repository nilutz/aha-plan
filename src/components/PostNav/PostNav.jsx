import React,{Component} from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const StyledDiv = styled.div`
overflow: auto;
width: 100%;
margin:0.5em;
`

const StyledDivLeft = styled.div`
float:left;
`
const StyledDivRight = styled.div`
float:right;
`



class PostNav extends Component {
  render() {
    const { prev, next } = this.props
    return (
      <StyledDiv>
        <StyledDivLeft>
        { prev != null && 
          <Link to={prev.frontmatter.path}> Prev </Link> 
        }
        </StyledDivLeft>
        <StyledDivRight>
        { next != null && 
        <Link to={next.frontmatter.path}> Next </Link>
        }
        </StyledDivRight>
      </StyledDiv>
    )
  }
}

export default PostNav
