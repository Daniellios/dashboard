import type { NextPage } from "next"
import type { ReactElement } from "react"
import React from "react"
import Overview from "../../components/Overview/Overview"
import Layout from "../../layouts/Layout"
import UserLayout from "../../layouts/UserLayout"
import type { NextPageWithLayout } from "../_app"
import { Head } from "../../components/Head/Head"
import ContentHeader from "../../components/ContentHeader/ContentHeader"
import Wallet from "../../components/Wallet/Wallet"
import Trade from "../../components/Trade/Trade"

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head title="System Overview"></Head>
      <ContentHeader
        pageName="User Management System Overview"
        title="Overview"
        calendar
      ></ContentHeader>
      <Overview />
      <Trade />
      <Wallet />
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
