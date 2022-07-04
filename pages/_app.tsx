import Layout from "@/src/layout/Layout";
import globalStyle from "@/styles/globalStyle";
import theme from "@/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
