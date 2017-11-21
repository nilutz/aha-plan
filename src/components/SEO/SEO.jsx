import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';

const SEO = (props) => {
  const {
 postNode, postPath, blog, postSEO,
} = props;
  let title;
  let description;
  let image;
  let postURL;
  if (postSEO) {
    title = postNode.frontmatter.title;
    description = postNode.excerpt;
    image = postNode.frontmatter.image;
    postURL = postPath;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteLogo;
  }

  image = `${config.siteUrl}/${image}`;

  let blogURL;
  if (blog) {
    blogURL = `${config.siteUrl}/blog`;
    title += ' Blog';
    description = `Achim Hannemann ${description}`;
  } else {
    blogURL = config.siteUrl;
  }

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push([
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      },
    ]);
  }

  return (
    <Helmet>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default SEO;
