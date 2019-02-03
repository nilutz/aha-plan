import React from "react";
import styled from "styled-components";
import Preview from "../components/Preview/Preview";
import Separator from "../components/Separator/Separator";
import SEO from "../components/SEO/SEO";

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
  const { edges: covers } = data.covers;

  return (
    <div>
      <SEO blog />
      <PostList className="md-cell md-cell--12">
        <H> Neue Einträge: </H>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            //take only this cover that has the same fileName as definde in post
            const cover = covers
              .map(({ node: cover }) => {
                if (post.frontmatter.image === "/" + cover.sizes.originalName) {
                  return cover;
                }
                if (post.frontmatter.image === "/content/blog/" + cover.sizes.originalName){
                  return cover;
                }
                //delete undefined elements
              })
              .filter(function(element) {
                return element !== undefined;
              });
            return (
              <div className="post-preview" key={post.id}>
                <Preview post={post} cover={cover} />
                <Separator />
              </div>
            );
          })}
      </PostList>
    </div>
  );
}
//    covers: allImageSharp(filter: { id: { regex: "/(201[0-9]).|.jpg|.png|.jpeg|.JPG/" } }) {

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
    covers: allImageSharp(filter: { id: { regex: "/(blog)/" } }) {
      edges {
        node {
          ...Img_details
        }
      }
    }
  }
`;
