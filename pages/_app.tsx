import * as React from "react";
import Layout from "@/src/layout/Layout";
import globalStyle from "@/styles/globalStyle";
import theme from "@/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.css";
import ApolloSetting from "@/src/components/commons/apollo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>다배</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
