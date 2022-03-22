import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage src="../images/test.jpg" alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" />
        </Layout>
    )
}

export default IndexPage;