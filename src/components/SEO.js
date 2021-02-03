import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const SEO = ({title, description}) => {
    const { href } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        defaultDescription,
        author,
        defaultImage,
        defaultColor
      } = site.siteMetadata

    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        author: author,
        image: defaultImage,
        color: defaultColor
      }

      const SchemaOrgJSONLD = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Bogna Anna - Graphic Design and Architecture",
        "description": "Portfolio Website of freelance graphic designer and architect Bogna Anna Gebalska.",
        "author" : {
            "@type": "Person",
            "name": "Bogna Anna Gebalska",
            "email": "bognaanna.design@gmail.com",
            "jobTitle": "Graphic Designer and Architect",
            "description": "Bogna Anna Gebalska is a freelance graphic designer and architect based in Copenhagen, Denmark.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Copenhagen, Denmark"
            },
            "sameAs": [
                "https://dk.linkedin.com/in/bogna-anna-gebalska",
                "https://issuu.com/bognaannagebalska"
              ]
        },
        "copyrightNotice": "All rights reserved. Bogna Anna Gebalska.",
        "offer": {
            "@type": "Offer",
            "description": "Graphic Design and Architecture",
            "itemOffered": {
                "@type": "Service",
                "description": "Freelance Graphic Design and Architecture."
            }
        }      
      }

      return (
        <Helmet htmlAttributes={{lang: 'en',}} title={seo.title}>
          <meta name="description" content={seo.description} />
          <meta name="author" content={seo.author}></meta>

          {/* <link rel="base" href="http://mywebsite.com"/>
          <link rel="canonical" href="http://mywebsite.com"/> */}

          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          <meta property="og:image" content={seo.image}/>
          <meta property="og:url" content={href}/>
          <meta property="og:type" content="website"/>
          
          <meta name="twitter:card" content="summary_large_image"/>
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          <meta name="twitter:image" content={seo.image}/>

          <meta itemprop="name" content={site.title}/>
          <meta itemprop="description" content={site.description}/>
          <meta itemprop="image" content={seo.image}/>
            
          <meta name="theme-color" content={seo.defaultcolor}/>
          <meta name="msapplication-navbutton-color" content={seo.color}/>
          <meta name="apple-mobile-web-app-status-bar-style" content={seo.color}/>

           <script type="application/ld+json">
            {JSON.stringify(SchemaOrgJSONLD)}
           </script>
        </Helmet>
      )
}


export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        author
        defaultImage: image
        defaultColor: themeColor
      }
    }
  }
`
