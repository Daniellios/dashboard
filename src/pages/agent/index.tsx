import type { NextPage } from "next"
import type { ReactElement } from "react"
import React from "react"
import Layout from "../../layouts/Layout"
import AgentLayout from "../../layouts/AgentLayout"
import type { NextPageWithLayout } from "../_app"

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AgentLayout>{page}</AgentLayout>
    </Layout>
  )
}

export default Page
