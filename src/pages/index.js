import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`datalobby`, `summary of APG`, `금융감독원 지적사항`]} />
    <div>
      {data.allIndexJson.edges.map(({ node }, index) => (
          <Link 
            to={`/byYear/${node.year}`}
            key={index}>
              <h3>{node.title}</h3>
          </Link>
      ))}
    </div>
  </Layout>
)


export const query = graphql`
    query {
        allIndexJson {
            edges {
                node {
                    title
                    year
                }
            }
        }
    }
`

export default IndexPage