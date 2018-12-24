import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StyledLayoutContainer>
    <Header />
    <div className="contentsContainer">
      {children}
    </div>
  </StyledLayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 24px;
  & .contentsContainer {
    padding: 24px 0 ;
  }
`

export default Layout
