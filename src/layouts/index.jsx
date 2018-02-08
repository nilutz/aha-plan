import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import i18n from "../components/i18ncomponent/i18ncomponent";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import config from "../../data/SiteConfig";
import "./index.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle} </title>
      <meta name="description" content={config.siteDescription} />
      <meta name="keywords" content={config.siteKeywords} />
    </Helmet>

    <Navbar />

    <Header />

    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        paddingTop: 0
      }}
    >    
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
