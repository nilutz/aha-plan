import React, { Component } from "react";
import styled from 'styled-components';
import Img from 'gatsby-image';
import { translate } from "react-i18next";


const Styledp = styled.p`
  margin: 15px
  padding-right: 10px;
  font-size: 17px;
  font-weight: 300;
  text-align:center;

`;

const Styledh1 = styled.h1`
  text-align: center;
`;

const Aboutaha = (props) => {
    const {t} = props;
    const { node: img } = props.titlepic.ahapic[0];
  return (
    <div>
      <Styledh1>{t("heading")}</Styledh1>
      <div className="md-grid">
        <div className="md-cell md-cell--8">
          <Styledp>
           {t("description")}
          </Styledp>
        </div>
        <div className="md-cell md-cell--4">
          <Img
            resolutions={img.resolutions}
            style={{ display: 'block', margin: 'auto', borderRadius: '50%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default translate("Aboutaha")(Aboutaha);
