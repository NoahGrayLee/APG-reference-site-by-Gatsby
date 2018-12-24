import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`datalobby`, `summary of APG`, `금융감독원 지적사항`]} />
    <h1>Summary of APG Reference Site</h1>

    <div>
      {data.allAccount1Json.edges.map(({ node }, index) => (
          <div key={index}>
              <h3>title: {node.title}</h3>
              <p>account: {node.account}</p>
              <p>comapny: {node.company}</p>
              <p>auditor: {node.auditor}</p>
              <p>focus: {node.focus}</p>
          </div>
      ))}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


export const query = graphql`
    query {
        allAccount1Json {
            edges {
                node {
                    title
                    account
                    company
                    auditor
                    focus
                }
            }
        }
    }
`

export default IndexPage