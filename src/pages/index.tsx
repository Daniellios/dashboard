import type { NextPage } from "next"
import type { ReactElement } from "react"
import React from "react"
import Layout from "../layouts/Layout"
import type { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
