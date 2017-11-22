import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-md/lib/Buttons';
import 'font-awesome/scss/font-awesome.scss';

const Footerlink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 100%;
  a:link {
    padding: 15px;
    color: #000;
    text-decoration: none;
  }
`;

class Sociallinks extends Component {
  getLinkElements() {
    const { footerLinks } = this.props.config;
    const { labeled } = this.props;
    return footerLinks.map(link => (
      <Button
        icon={false}
        flat
        secondary
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
      >
        {labeled ? link.label : ''}
      </Button>
    ));
  }

  render() {
    return <Footerlink>{this.getLinkElements()}</Footerlink>;
  }
}

export default Sociallinks;
