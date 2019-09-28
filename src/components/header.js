import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{
      color: `white`,
    }} to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#6049b1`,
      marginBottom: `1.45rem`,
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.55rem 1.0875rem`,
      }}
    >

      <Link to="/" style={{
        color: `white`,
        textDecoration: `none`,

      }}>
        <Image /><h3 style={{ verticalAlign: `middle`, display: `inline-block`, paddingTop: 20 }}>{siteTitle}</h3>
      </Link>


      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/get-started">Get started</ListLink>
        <a style={{
          display: `inline-block`, marginRight: `1rem`,
          color: `white`,
        }} href={`${process.env.GATSBY_OST_URL}`}>Login</a>
        <ListLink to="/products/">Products</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>

    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
