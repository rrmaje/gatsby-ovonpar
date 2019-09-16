import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const products = require("../../data/products.json");

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Products = () => (
<Layout>
<SEO title="Products" />
  <div style={{ marginBottom: 20 }}>
    <h2>Currently listed products</h2>
    {

      products && products.map(function (p,index) {
        const path = `/product/${p.slug}`;
        return (
          <ListLink to={path} key={index}>{p.title}</ListLink>
        );
      })}
  </div>
  </Layout>
)

export default Products