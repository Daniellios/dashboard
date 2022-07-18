import type { NextPage } from "next"
import type { ReactElement } from "react"
import React from "react"
import Layout from "../../layouts/Layout"
import UserLayout from "../../layouts/UserLayout"
import type { NextPageWithLayout } from "../_app"

const Page: NextPageWithLayout = () => {
  return <p>LOGOUT</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <UserLayout> {page}</UserLayout>
    </Layout>
  )
}

export default Page
