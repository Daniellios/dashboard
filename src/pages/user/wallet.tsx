import type { NextPage } from "next"
import type { ReactElement } from "react"
import React from "react"
import Layout from "../../layouts/Layout"
import UserLayout from "../../layouts/UserLayout"
import type { NextPageWithLayout } from "../_app"
import { Head } from "../../components/Head/Head"
import ContentHeader from "../../components/ContentHeader/ContentHeader"
import Wallet from "../../components/Wallet/Wallet"

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Wallet" />
      <ContentHeader pageName="User Management Wallet" title="wallet" />
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
