import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const Head = ({currentURL, pathname})=>{
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    
                }
            }
        }
    `)
    
    return (
        <Helmet htmlAttributes={{lang: 'en',}}>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description}></meta>
            <meta name="author" content={data.site.siteMetadata.author}></meta>
            {/* <link rel="canonical" href={url} /> */}
            <meta property="og:url" content={currentURL}/>

            <meta name="theme-color" content="#707070"/>
            <meta name="msapplication-navbutton-color" content="#707070"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#707070"/>

            <meta property="og:type" content="website"/>
            <meta property="og:title" content={data.site.siteMetadata.title}/>
            {/* <meta property="og:url" content="http://mywebsite.com"/> */}
            {/* <meta property="og:image" content={data.site.siteMetadata.defaultImage}/> */}
            <meta property="og:description" content={data.site.siteMetadata.description}/>

            {/* <meta name="twitter:card" content="summary"/> */}
            <meta name="twitter:title" content={data.site.siteMetadata.title}/>
            <meta name="twitter:description" content={data.site.siteMetadata.description}/>
            <meta name="twitter:creator" content={data.site.siteMetadata.author}/>
            {/* <meta name="twitter:image" content={data.site.siteMetadata.defaultImage}/> */}

            <meta itemprop="name" content={data.site.siteMetadata.title}/>
            <meta itemprop="description" content={data.site.siteMetadata.description}/>
            {/* <meta itemprop="image" content={data.site.siteMetadata.defaultImage}/> */}

        </Helmet>
        
    )
}

export default Head