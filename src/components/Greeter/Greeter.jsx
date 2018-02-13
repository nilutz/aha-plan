import "font-awesome/scss/font-awesome.scss";
import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { translate } from "react-i18next";

import Separator from "../Separator/Separator";

const StyledContainerDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Styledh1 = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Styledh3 = styled.h3`
  text-align: center;
  font-weight: 300;
`;

const Styledh4 = styled.h4`
  font-size: 16px;
  text-align: center;
  font-weight: 300;
`;
const Styledp = styled.p`
  margin: 0 auto;
`;
const Stylei = styled.i`
  font-size: 45px !important;
  font-weight: 300;
`;

const Greeter = props => {
  const { t } = props;
  return (
    <StyledContainerDiv>
      <Styledh1>{t("heading")}</Styledh1>
      <Separator />
      <Styledh3> {t("subheading1")} </Styledh3>
      <div className="md-grid">
        <div className="md-cell md-cell--4" style={{ textAlign: "center" }}>
          <Stylei className="fa fa-pencil" style={{ marginBottom: " 10px" }} />
          <Styledh3> {t("subheading2")} </Styledh3>
          <Styledh4>{t("description2")}</Styledh4>
        </div>
        <div className="md-cell md-cell--4" style={{ textAlign: "center" }}>
          <Styledp>
            <Stylei
              className="fa fa-desktop"
              style={{ marginBottom: " 10px" }}
            />
          </Styledp>
          <Styledh3> {t("subheading3")}</Styledh3>
          <Styledh4>{t("description3")}</Styledh4>
        </div>
        <div className="md-cell md-cell--4" style={{ textAlign: "center" }}>
          <Link style={{ textDecoration: "none" }} to="/blog">
            <Stylei
              className="fa fa-list-alt"
              style={{ marginBottom: " 10px" }}
            />
            <Styledh3> {t("subheading4")}</Styledh3>
          </Link>
          <Styledh4>{t("description4")}</Styledh4>
        </div>
      </div>
    </StyledContainerDiv>
  );
};

export default translate("Greeter")(Greeter);
