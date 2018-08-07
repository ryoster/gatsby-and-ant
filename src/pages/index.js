import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div style={{ color: 'blue', fontSize: '40px'}} >Hello Gatsby!</div>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export default IndexPage
