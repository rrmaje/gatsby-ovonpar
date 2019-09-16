import React from "react"

import Layout from "../components/layout"
import "../components/contact.module.css"

const Contact = () => (
  <Layout>
    <div style={{ display: `block`, marginBottom: `3.45rem` }}>
      <form method="post" name="contact" netlify-honeypot="bot-field" data-netlify="true" style={{ maxWidth: 600 }}>
        <input type="hidden" name="bot-field" />
        <label>
          Name
    <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
    <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
    <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
    <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit" style={{maxWidth: `4rem`, float: `left` }}>Send</button>
        <input type="reset" value="Clear" style={{ maxWidth: `4rem`, float: `left`, marginLeft: 18, maringBottom: 30 }} />
      </form>
    </div>
  </Layout>
)

export default Contact
