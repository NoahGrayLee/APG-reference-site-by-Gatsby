import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import { graphql } from 'gatsby';

const Year2017 = ({data}) => (
    <Layout>
        <div>
            {data.allAccount1Json.edges.map(({ node }, i) => (
                <div key={i}>
                    {node.title}
                </div>
            ))}
        </div>
    </Layout>
)

export const query = graphql`
    query {
        allAccount1Json(filter: {year: {eq: "2017"}}) {
            edges {
                node {
                    title
                }
            }
        }
    }
`

export default Year2017