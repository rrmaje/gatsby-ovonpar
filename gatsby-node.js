/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions: { createPage } }) => {
    const products = require("./data/products.json")
    products.forEach(product => {
      createPage({
        path: `/product/${product.slug}/`,
        component: require.resolve("./src/templates/product.js"),
        context: {
          title: product.title,
          description: product.description,
        },
      })
    })
  }