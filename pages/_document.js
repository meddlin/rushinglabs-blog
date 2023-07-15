import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon-logo.png" />
        <script async defer data-domain="rushinglabs.com" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
