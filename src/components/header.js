import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <StyledHeader>
    <div>Audit Program Guide</div>
    <Link to="/">
      <h1>APG Reference Site</h1>
    </Link>
    <div className="informations FRL">
      <div className="datalobby">by DATA LOBBY</div>
      <div>Refer to the Financial Supervisory Service</div>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  padding: 16px 0;
  & .informations {
    font-size: 12px;
    color: #666;
    margin-top: 0.5rem;
    & .datalobby {
      margin-right: 8px;
      padding-right: 8px;
      border-right: 1px solid  #ccc;
    }
  }

`

export default Header
