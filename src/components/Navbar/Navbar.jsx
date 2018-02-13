import "font-awesome/scss/font-awesome.scss";
import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Button from "react-md/lib/Buttons";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const StyledLinkLeft = styled(Link)`
  text-align: left;
  @media only screen and (max-width: 600px) {
    text-align: left;
  }
`;
const StyledLinkCenter = styled(Link)`
  text-align: center;
  @media only screen and (max-width: 600px) {
    text-align: left;
  }
`;
const StyledDivRight = styled.div`
  text-align: right;
  @media only screen and (max-width: 600px) {
    text-align: left;
  }
`;

const Navbar = () => (
  <div
    style={{
      margin: "0 auto",
      maxWidth: 960,
      paddingTop: 0
    }}
  >
    <div className="md-grid">
      <StyledLinkLeft
        to="/"
        className="md-cell md-cell--4-desktop md-cell--2-tablet md-cell--4-phone"
      >
        <Button
          style={{ fontSize: "25px", fontWeight: "700" }}
          flat
          icon={false}
          iconClassName="fa fa-home"
        >
          {" "}
          Home{" "}
        </Button>
      </StyledLinkLeft>
      <StyledLinkCenter
        to="/blog"
        className="md-cell md-cell--4-desktop md-cell--4-tablet md-cell--4-phone"
      >
        <Button
          style={{ fontSize: "25px", fontWeight: "700" }}
          flat
          icon={false}
          iconClassName="fa fa-list-alt"
        >
          {" "}
          Blog{" "}
        </Button>
      </StyledLinkCenter>
      <StyledDivRight className="md-cell md-cell--4-desktop md-cell--2-tablet md-cell--4-phone md-cell--right">
        <LanguageSwitcher />
      </StyledDivRight>
    </div>
  </div>
);

export default Navbar;
