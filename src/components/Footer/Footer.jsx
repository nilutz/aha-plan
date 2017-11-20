import React, { Component } from "react";
import styled from "styled-components";
import Footerlinks from "../Footerlinks/Footerlinks";
import config from "../../../data/SiteConfig";
import Link from "gatsby-link";

const Foot = styled.footer`
  padding: 10px 5px 5px 5px;

  justify-content: center;
  align-content: center;
  background-color: #ffb74d;

  .notice-container {
    display: flex;
    align-content: center;
    align-items: center;
    margin-top: 25px;

    .copyright {
      display: flex;
      flex: 1;
      justify-content: flex-start;

      @media (max-width: 640px - 1px) {
        justify-content: center;
      }
    }

    .impressum {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      @media (max-width: 640px - 1px) {
        justify-content: center;
      }
    }

    h4 {
      color: #fff;
      text-align: center;
      margin: 0;
    }
  }
`;

class Footer extends Component {
  render() {
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <Foot>
        <Footerlinks config={config} />
        <div className="notice-container">
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>
          <div className="impressum">
            <Link
              style={{
                textDecoration: "none",
                color: "#FFF",
                textAlign: "center",
                margin: "0"
              }}
              to="/impressum"
            >
              {" "}
              Impressum{" "}
            </Link>
          </div>
        </div>
      </Foot>
    );
  }
}

export default Footer;
