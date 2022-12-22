import React from "react";
import { Helmet } from "react-helmet";
import { seo, myInfo } from "../Data/Data";

const Seo = () => {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta property="og:title" content={seo.title} />

      <link rel="icon" href={require(`../Assets/Favicon/${seo.favicon}`)} />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={seo.canonical} />
      <meta property="og:url" content={seo.canonical} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />

      <meta name="keywords" content={seo.keywords} />

      <meta name="twitter:card" content={seo.image} />
      <meta property="og:image" content={seo.image} />

      <meta
        property="title"
        content={seo.title}
      />
      <meta property="type" content="article" />
      <meta property="image" content={require(`../Assets/MyPicture/${myInfo.image}`)} />
      <meta property="url" content={seo.url} />
      <meta
        property="description"
        content={seo.description}
      />
      <meta property="site_name" content={seo.title} />
    </Helmet>
  );
};

export default Seo;
