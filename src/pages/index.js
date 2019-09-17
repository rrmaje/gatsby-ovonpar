import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{marginBottom:20}}>
    <div style={{paddingBottom:5}}>
    <h2 style={{display:`inline`}}>Ovonpar Stock Ticker</h2> <p style={{paddingTop:5}}><strong> Marketplace for standardized goods</strong></p>
    </div>
    <p>Centralize purchasing and selling of products.</p>
    <p>Build market for the products in your supply and distribution chains.</p>
    <p>Create flexible supply and distribution chains responsive to changes in demand and supply.</p>
    <p>Find latest quotes of the products.</p>
    <p>Enter orders to match best bids and offers.</p>
    <p>Try Ovonpar Stock Ticker.</p>
    <a href="http://35.204.16.24:3000/signup">SignUp</a>
    </div>
  </Layout>
)

export default IndexPage
