import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import type { NextPage } from "next"
import React, { Component, ReactElement, ReactNode } from "react"

import { ThemeProvider } from "next-themes"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
