import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { GridList, Card, Media } from "react-md";
import Greeter from "../components/Greeter/Greeter";
import Aboutaha from "../components/Aboutaha/Aboutaha";
import Awardsaha from "../components/Awardsaha/Awardsaha";
import Separator from "../components/Separator/Separator";
import SEO from "../components/SEO/SEO";

export default function IndexPage({ data }) {
  const { edges: imgs } = data.middle;
  const { edges: ahapic } = data.aha;

  return (
    <div className="md-cell md-cell--12">
      <SEO />

      <Greeter />
      <Separator />

      <h1 style={{ textAlign: "center" }}> Projekte </h1>
      <GridList container="pictures" size={3} component="section">
        {imgs.map(({ node: img }, index) => {
          const path = img.sizes.originalName.slice(0, -4);
          return (
            <Card key={img.id} className="md-cell--4-tablet md-cell--2-phone">
              <Link style={{ textDecoration: "none" }} to={path}>
                <Media aspectRatio="1-1">
                  <Img
                    sizes={img.sizes}
                    src={img.sizes.src}
                    srcSet={img.sizes.srcSet}
                    alt=""
                  />
                </Media>
              </Link>
            </Card>
          );
        })}
      </GridList>
      <Separator />
      <Aboutaha titlepic={{ ahapic }} />
      <Separator />
      <Awardsaha />
    </div>
  );
}

export const indexQuery = graphql`
  query allImg {
    middle: allImageSharp(filter: { id: { regex: "/portfolio/middle/" } }) {
      edges {
        node {
          ...Img_details
        }
      }
    }
    aha: allImageSharp(filter: { id: { regex: "/portfolio/aha/" } }) {
      edges {
        node {
          resolutions(width: 125, height: 125) {
            ...GatsbyImageSharpResolutions
          }
        }
      }
    }
  }

  fragment Img_details on ImageSharp {
    id
    sizes {
      base64
      aspectRatio
      src
      srcSet
      sizes
      originalImg
      originalName
    }
  }
`;
