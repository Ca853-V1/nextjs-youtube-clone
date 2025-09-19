import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>YouTube</title>
        <meta name="description" content="YouTube clone built with Next.js" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
