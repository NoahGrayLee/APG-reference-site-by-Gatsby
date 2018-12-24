import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <h1>About:</h1>
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
