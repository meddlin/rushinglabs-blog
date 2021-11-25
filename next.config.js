/**
 * By default Next.js will only pickup files with .js or .jsx extensions.
 * So, we need this config to extend that behavior.
 */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        // Taken from: https://nextjs.org/docs/api-reference/next.config.js/ignoring-eslint
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['meddlin-web.s3.us-east-2.amazonaws.com']
    }
})