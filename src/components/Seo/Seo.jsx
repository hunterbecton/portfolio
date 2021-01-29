import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, keywords, title, image, url, author }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle =
          title || "Hunter Becton | Web Designer and Developer in Atlanta, GA"
        const metaAuthor = author || "Hunter Becton"
        const metaUrl = url || "https://hunterbecton.com"
        const metaImage =
          image ||
          "https://hunterbecton.com" + data.file.childImageSharp.fixed.src
        const metaKeywords = keywords || [
          "design",
          "web designer",
          "developer",
          "full stack developer",
          "web developer",
          "frontend developer",
          "frontend engineer",
          "react engineer",
          "react developer",
          "atlanta developer",
          "atlanta frontend developer",
          "gatsby developer",
          "gatsby js developer",
        ]
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: metaTitle,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:type",
                content: `website`,
              },
              {
                property: "og:image",
                content: metaImage,
              },
              {
                property: "og:url",
                content: metaUrl,
              },
              {
                name: "twitter:card",
                content: `summary_large_image`,
              },
              {
                name: "twitter:creator",
                content: metaAuthor,
              },
              {
                name: "twitter:title",
                content: metaTitle,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
              {
                name: "twitter:image",
                content: metaImage,
              },
            ]
              .concat(
                metaKeywords && metaKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
}

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    file(relativePath: { eq: "social.jpg" }) {
      childImageSharp {
        fixed(width: 1200, quality: 80) {
          src
        }
      }
    }
  }
`
