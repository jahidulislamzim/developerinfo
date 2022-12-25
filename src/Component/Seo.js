import React from "react";
import { Helmet } from "react-helmet";
import { seo, myInfo } from "../Data/Data";

const Seo = () => {

   function picData(){
    try {
      const pic = require(`../Assets/MyPicture/${myInfo.image}`);
      const data = {pic:pic}
      return data
    } catch (error) {
      return 0;
    }
  }
   function favData(){
    try {
      const fav = require(`../Assets/Favicon/${seo.favicon}`);
      const data = {fav:fav}
      return data
    } catch (error) {
      console.log('Your favicon file extension is incorrect. Please include your valid file extension in the data.js file.')
      return 0;
    }
  }




  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta property="og:title" content={seo.title} />

      <link rel="icon" href={favData().fav} />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={seo.canonical} />
      <meta property="og:url" content={seo.canonical} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />

      <meta name="keywords" content={seo.keywords} />

      <meta name="twitter:card" content={picData().pic} />
      <meta property="og:image" content={picData().pic} />

      <meta
        property="title"
        content={seo.title}
      />
      <meta property="type" content="article" />
      <meta property="image" content={picData().pic} />
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
