import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Button from 'react-md/lib/Buttons';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StyledDivCenter = styled.div`
  font-weight: 900;
`;

const PostNav = (props) => {
  const { prev, next } = props;
  return (
    <StyledDiv>
      <div>
        {prev != null && (
          <Link to={prev.frontmatter.path}>
            <Button flat iconClassName="fa fa-arrow-left">
              {' '}
              Prev{' '}
            </Button>
          </Link>
        )}
      </div>
      <StyledDivCenter>
        <Link to="/blog">
          <Button flat icon={false} iconClassName="fa fa-list-alt">
            {' '}
            Blog{' '}
          </Button>
        </Link>
      </StyledDivCenter>
      <div>
        {next != null && (
          <Link to={next.frontmatter.path}>
            <Button flat iconBefore={false} iconClassName="fa fa-arrow-right">
              {' '}
              Next{' '}
            </Button>
          </Link>
        )}
      </div>
    </StyledDiv>
  );
};

export default PostNav;
