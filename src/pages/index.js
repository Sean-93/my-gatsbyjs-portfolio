import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Const SeanRooney = WebDev</title>
        <link rel="canonical" href="http://sean-rooney.netlify.app" />
      </Helmet>
    </Layout>
  )
}
