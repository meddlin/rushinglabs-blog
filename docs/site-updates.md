# Site Updates

_NOTE: Make a point to turn these into parts of the "website vlog" series._

_This is really just to keep write these down somewhere for now._

## 1. Simple stuff...TikTok link?

GH Issues

- Upgraded to Next.js 12 (look at next update to see what nasty side-effect this caused!)
    - https://github.com/meddlin/rushinglabs-blog-nextjs/issues/45
- Read more link should be under each post
    - https://github.com/meddlin/rushinglabs-blog-nextjs/issues/43
- Show blog post "section" in each post preview (on landing page)
    - https://github.com/meddlin/rushinglabs-blog-nextjs/issues/37

## 2. MDX Support

This is the biggest single update since I converted the site from Gatsby to Next.js.

Discuss the blog post about the site (now) supporting MDX

https://www.rushinglabs.com/blog/2021/this-site-uses-mdx

GH Issues

- images aren't showing anymore
    - https://github.com/meddlin/rushinglabs-blog-nextjs/issues/59
- convert posts to MDX
    - https://github.com/meddlin/rushinglabs-blog-nextjs/issues/60

## 3. Responsive design (especially for MDX-handled code)

- Finish responsive design
- Special notes on handling code within the `<pre>` tag
    - https://mediatemple.net/blog/design-creative/considerations-for-styling-the-pre-tag/

## 4. Consistent UI: Necessary site needs

- Good SEO support
    - Create a dynamic sitemap, robots.txt
        - https://leerob.io/blog/nextjs-sitemap-robots
        - this might help too: https://www.npmjs.com/package/next-sitemap
- Incremental image loading
    - https://gabrielm-linassi.medium.com/building-incremental-image-loading-with-next-js-11-cloudinary-1a5d3db13b1a
- Custom favicon (blowtorch)
    - Check this: https://stackoverflow.com/questions/56213019/how-to-add-a-favicon-to-a-next-js-static-site
- Support for dark mode
    - These two links use Chakra-UI, which apparently has built-in support for managing color modes via localstorage
        - https://medium.com/geekculture/an-amateurs-guide-to-adding-darkmode-to-your-react-application-11b1c0d504af
        - https://chakra-ui.com/docs/features/color-mode
- Setup email newsletter via Mailchimp
    - https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965
- Turn site into a PWA
    - https://dev.to/byteslash/how-to-create-a-pwa-with-next-js-4dbm


## 4. Consistent UI: Good (small) things

- Write the different image, text-wrapping components
    - image + text-wrapping to left
    - image + text-wrapping to right
    - These need full responsive support, too. Ex: on mobile, the images likely shouldn't wrap at all (just be vertical). On tablet, they can probably still wrap, but only for landscape view.
- A Twitter embed...for sharing things from Twitter
    - https://github.com/meddlin/rushinglabs-blog-nextjs/issues/68

## ?. Setup proper post archives

- Add ability to show blog posts per year

## ?. Just for fun - Stats page/component

- Create a blog post "stats" page (maybe media stats, too?)
    - Share how many posts were made, words written, views had (from Plausible?)
    - This could be a static component that gets updated data upon each build, and the "view" portion is ran with MDX to always have the most up-to-date information displayed

## ?. Search for posts

- Search capability
    - This needs to be local searching. Build index at build-time. No API calls. Let it work until it becomes too slow.