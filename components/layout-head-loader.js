import Head from 'next/head';

export const siteTitle = 'Rushing Labs';

/**
 * Layout Head Loader 
 * This is how we load resources in the "top" (a.k.a. "head") of our
 * site. This is how we add stylesheets, JS scripts, meta tags, a
 * custom title, etc. to the site.
 * See: https://nextjs.org/docs/api-reference/next/head
 * See: https://github.com/vercel/next.js/tree/canary/examples/head-elements
 */

export default function LayoutHeadLoader({}) {
    return (
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Rushing Labs - A place to build things and hangout"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;700&family=Palanquin:wght@100;300&display=swap" rel="stylesheet"></link>
        </Head>
    );
}