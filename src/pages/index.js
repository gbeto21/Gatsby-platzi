import React from "react"
import { graphql } from "gatsby"
import { Jumbo, Products } from "../components"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              descripci_n
              img
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripeSku.edges} />
    </>
  )
}

export default IndexPage
