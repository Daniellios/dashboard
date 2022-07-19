import type { NextPage } from "next"
import type { ReactElement } from "react"
import React from "react"
import ContentHeader from "../../components/ContentHeader/ContentHeader"
import { Head } from "../../components/Head/Head"
import Trade from "../../components/Trade/Trade"
import Layout from "../../layouts/Layout"
import UserLayout from "../../layouts/UserLayout"
import type { NextPageWithLayout } from "../_app"

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Trade" />
      <ContentHeader pageName="User Management Trade" title="trade" />
      <Trade />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <UserLayout>{page}</UserLayout>
    </Layout>
  )
}

export default Page
