import type { NextPage } from "next"
import type { ReactElement } from "react"
import React from "react"
import Layout from "../../layouts/Layout"
import AdminLayout from "../../layouts/AdminLayout"
import type { NextPageWithLayout } from "../_app"

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AdminLayout>{page}</AdminLayout>
    </Layout>
  )
}

export default Page
