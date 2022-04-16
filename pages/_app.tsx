import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "@themes";
import Layout from "@layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
