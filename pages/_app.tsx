import "@/styles/globals.css";

import { type AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain="lukahartwig.de"
      trackLocalhost={false}
      trackOutboundLinks
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}
