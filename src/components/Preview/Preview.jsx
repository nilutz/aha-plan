import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledLink = styled(Link)`
  font-size: 27px;
  font-weight: 500;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.64);
`;

const StyledSubheader = styled.h5`
  font-size: 14px;
  font-weight: 200;
`;

const StyledP = styled.p`
  font-size: 18px;
  font-weight: 300;
`;
const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const StyledRaquo = styled(Link)`
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
`;

const Preview = props => {
  const { post } = props;
  const { cover } = props;
  const coverElem = cover[0];
  const isCover = coverElem === undefined;

  return (
    <Container>
      <div className="Preview md-grid">
        <div className="md-cell md-cell--4">
          <Link to={post.frontmatter.path}>
            {isCover ? (
              <img src={post.frontmatter.image} alt="" />
            ) : (
              <Img
                sizes={coverElem.sizes}
                src={coverElem.sizes.src}
                srcSet={coverElem.sizes.srcSet}
                alt=""
              />
            )}
          </Link>
        </div>
        <div className="md-cell md-cell--8">
          <StyledLink to={post.frontmatter.path}>
            {post.frontmatter.title}
          </StyledLink>
          <StyledSubheader>{post.frontmatter.date}</StyledSubheader>
          <StyledP>
            {post.excerpt}{" "}
            <StyledRaquo to={post.frontmatter.path}>&raquo;</StyledRaquo>
          </StyledP>
        </div>
      </div>
    </Container>
  );
};
export default Preview;
