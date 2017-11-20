import React from 'react'
import Link from 'gatsby-link'
import Greeter from '../components/Greeter/Greeter'
import Aboutaha from '../components/Aboutaha/Aboutaha'
import Awardsaha from '../components/Awardsaha/Awardsaha'
import Separator from '../components/Separator/Separator'
import { GridList, Card, Media } from 'react-md'

export default function IndexPage({data}){

    const {edges : imgs} = data.middle
    const {edges : ahapic} = data.aha
    const {edges : paths} = data.paths

    return(
      <div>
        <Greeter/>
        <Separator />  

        <h1 style={{textAlign:'center'}}> Projekte </h1>
        <GridList container="pictures" size={3} component="section">
          {imgs.map(({ node: img}, index) => {
            const path = paths[index].node.name
            return (
              <Card key={img.id}>
                <Link style={{textDecoration: 'none'}} to={path}>
                  <Media aspectRatio="1-1">
                    <img
                        src={img.sizes.src}
                        srcSet={img.sizes.srcSet}
                        sizes="(min-width: 960px) 256px, 33vw"     
                      />                 
                  </Media>
                </Link>
              </Card>
            )
          })}
        </GridList>
        <Separator />
        <Aboutaha titlepic={{ahapic}}/>
        <Separator />
        <Awardsaha />
      </div>
    )
}


export const indexQuery = graphql`
query allImg {
  middle: allImageSharp(filter: {id: {regex: "/portfolio/middle/"}}) {
    edges {
      node {
        ...Img_details
      }
    }
  }
  paths: allFile(filter: {id:{regex: "/portfolio/middle/"}}) {
    edges{
      node{
        name
      }
    }  
  } 
  aha: allImageSharp(filter: {id: {regex: "/portfolio/aha/"}}) {
    edges {
      node {
        ...Img_details
      }
    }
  }
}


fragment Img_details on ImageSharp{
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

`