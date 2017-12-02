import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-md/lib/Buttons';
import 'font-awesome/scss/font-awesome.scss';

const Footerlink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  a:link {
    color: #000;
    text-decoration: none;
  }
`;

class Sociallinks extends Component {
  getLinkElements() {
    const { footerLinks } = this.props.config;
    return footerLinks.map(link => (
      <Button
        icon
        secondary
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
        tooltipLabel={link.url}
      />
    ));
  }

  render() {
    return <Footerlink>{this.getLinkElements()}</Footerlink>;
  }
}

export default Sociallinks;
