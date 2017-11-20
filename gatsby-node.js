const path = require('path')
const _ = require('lodash')
const webpackLodashPlugin = require('lodash-webpack-plugin')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogTemplate = path.resolve(`src/components/BlogTemplate/BlogTemplate.jsx`)
  const modalTemplate = path.resolve(`src/components/ModalTemplate/ModalTemplate.jsx`)

  return graphql(
        `
          { 
            allDirectory(filter: { id: {regex:"/portfolio/index//"}}) 
            {
              edges {
                node {
                  relativePath
                }
              }
            }

            allMarkdownRemark( sort: { order: ASC, fields: [frontmatter___date] })
            {
              edges {
                node {
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    path
                  }
                }
                next {
                  frontmatter { path }
                }
                prev: previous {
                  frontmatter { path }
                }
              }
            }
          }

        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }
          const posts = result.data.allMarkdownRemark.edges;
          const images= result.data.allDirectory.edges

          posts.forEach(({ node, next, prev }, index ) => {
            createPage({
              path: _.kebabCase(node.frontmatter.path),
              component: blogTemplate,
              context: {
                prev,
                next
              }

            })
          })

          images.forEach(({node, next, prev}, index) =>{
            //modifing the returned string
            const slug = node.relativePath.split("/").pop()
                        
            createPage({
              path: _.kebabCase(slug),
              component: modalTemplate,
              context: { 
                id: slug,
                rp: '/'+node.relativePath+'/'
                
              }
            })

          })
          return posts;
      })
  }

/*
 * Remove trailing slashes
 * from https://github.com/DSchau/blog/blob/master/gatsby-node.js
 */
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise(resolve => {
    const oldPath = page.path
    page.path = page.path === `/` ? page.path : page.path.replace(/\/$/, ``)

    if (page.path !== oldPath) {
      deletePage({ path: oldPath })
      createPage(page)
    }
    resolve()
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }
}