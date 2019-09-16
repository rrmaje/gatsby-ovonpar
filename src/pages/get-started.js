import React from "react"

import Layout from "../components/layout"

const GetStarted = () => (
  <Layout>
    <div style={{ marginBottom: 20 }}>
      <h2>Learn more about the Service</h2>
      <h4>Eligibility</h4>
      <p>Ovonpar Stock Ticker delivers service to facilitate spot trading of standardized goods:</p>
      <ul>
        <li>Merchandise for which specification can be developed to streamline matching of demand and supply</li>
        <li>Goods that are usually offered by more than one supplier - seller
             and for which demand is generated by multiple buyers</li>
      </ul>
      <p>Financial Instruments as defined by Markets in Financial Instruments Directive,
         especially Forward contracts are not supported.</p>
      <h4>Market Data</h4>
      <p>For each enlisted merchandise, Service is maintainig an order book.
        You get access to current information about Best Bids and Offers as well as
        latest price and quantity for which buyer's and seller's orders have been matched - quotes.</p>
      <p>You can enter an order to buy or sell any quoted merchandise.
         Unless it is matched with another resting or incoming order, you can cancel the order.</p>
      <h4>Market Reporting</h4>
      <p>Any entered order that has been matched, will be instantly listed in the Market Reporting.
        You will be informed by email about the details of the order including contact email of the buyer or seller.
        Purchasing or selling agreements are not managed by the Service. You can finalize contractual provisions outside of the Service.
      </p>
      <p>Please contact us using Contact form if you would like to enlist new merchandise. We will review its eligibility and if no legal constraints, enlist it so that you could start building market for goods of your interest.</p>
      <p>Try Ovonpar Stock Ticker and <a href="http://35.204.16.24:3000/signup">sign up</a> for the account.</p>
    </div>
  </Layout>
)

export default GetStarted
