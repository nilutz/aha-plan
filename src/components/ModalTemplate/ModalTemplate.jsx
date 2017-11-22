import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Button from 'react-md/lib/Buttons';
import Link from 'gatsby-link';
import 'font-awesome/scss/font-awesome.scss';
import _ from 'lodash';

const Styledh1 = styled.h1`
  margin-top: 25px;
  text-align: center;
  font-weight: 300;
`;

export default function ModalTemplate({ data, pathContext }) {
  const { edges: imgs } = data.allImageSharp;
  const { id: title } = pathContext;
  const head = _.upperFirst(title);

  return (
    <div>
      <Styledh1> {head} </Styledh1>
      <div className="md-grid">
        {imgs.map(({ node: img }) => (
          <div key={img.sizes.src} className="md-cell md-cell--6">
            <Img sizes={img.sizes} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', fontWeight: '700', margin: '15px' }}>
        <Link to="/">
          <Button flat icon={false} iconClassName="fa fa-home">
            {' '}
            Home{' '}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export const indexQuery = graphql`
  query modalImg($rp: String!) {
    allImageSharp(filter: { id: { regex: $rp } }) {
      edges {
        node {
          ... on ImageSharp {
            sizes(maxWidth: 460) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
