import 'font-awesome/scss/font-awesome.scss';

import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Button from 'react-md/lib/Buttons';

// const StyledDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Navbar = () => (
  <div
    style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: 0,
      }}
  >
    <StyledDiv>
      <Link to="/">
        <Button flat icon={false} iconClassName="fa fa-home">
          {' '}
            Home{' '}
        </Button>
      </Link>
      <Link to="/blog">
        <Button flat icon={false} iconClassName="fa fa-list-alt">
          {' '}
            Blog{' '}
        </Button>
      </Link>
    </StyledDiv>
  </div>
  );

export default Navbar;
