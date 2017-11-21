import React from 'react';
import styled from 'styled-components';
import Preview from '../components/Preview/Preview';
import Separator from '../components/Separator/Separator';
import SEO from '../components/SEO/SEO';

const H = styled.h1`
  margin-top: 25px;
  text-align: center;
  margin-bottom: 25px;
`;

const PostList = styled.div`
  border: none;
  margin: auto;
  padding: auto;
  top: 10%;
  bottom: 10%;
  text-align: justify;
`;

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <SEO blog />
      <PostList>
        <H> Neue Einträge: </H>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <div className="post-preview" key={post.id}>
              <Preview post={post} />
              <Separator />
            </div>
          ))}
      </PostList>
    </div>
  );
}

export const postListQuery = graphql`
  query PostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
          }
        }
      }
    }
  }
`;
