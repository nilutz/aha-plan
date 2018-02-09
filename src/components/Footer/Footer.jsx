import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Sociallinks from '../Sociallinks/Sociallinks';
import config from '../../../data/SiteConfig';

const Footer = () => {
  const copyright = config.copyright;
  if (!copyright) {
    return null;
  }
  return (
    <div style={{ backgroundColor: '#ffb74d' }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        <Sociallinks config={config} />
        <div className="notice-container md-grid ">
          <div className="copyright md-cell md-cell--2-phone" style={{ margin: '0' }}>
            <h4>{copyright}</h4>
          </div>
          <div
            className="impressum md-cell--right md-cell--2-phone"
            style={{ textAlign: 'right' }}
          >
            <Link
              style={{
              textDecoration: 'none',
              color: '#000',
              textAlign: 'center',
              fontSize: '15px',
              justifyContent: 'right',
              lineHeight: '28px',
            }}
              to="/impressum"
            >
              {' '}
            Impressum & Datenschutz{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
