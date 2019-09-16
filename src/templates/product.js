import React from "react"
import Layout from "../components/layout"
const Product = ({ pageContext }) => (
<Layout> 
  <div>
    <h2>{pageContext.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: pageContext.description }} />
  </div>
</Layout>
)
export default Product