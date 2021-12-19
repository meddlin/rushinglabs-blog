---
date: "2021-12-16"
title: "How to change an audio clip from mono to stereo"
published: 'false'
section: 'davinci resolve'
preview: |-
    How to change an audio clip from mono to stereo
---


# Syntax Highlighting - MDX

<hr />

_**Inspiration**_

This is how someone got this working in Gatsby with MDXProvider and `prism-react-renderer`. I used a similar idea to pull things together with Next.js and `react-syntax-highlighter`.

[https://malikgabroun.com/blog/syntax-highlighting-in-gatsby-mdx/](https://malikgabroun.com/blog/syntax-highlighting-in-gatsby-mdx/)

<hr />


Here's how I made use of `<SyntaxHighlighter>` in the MDX configuration, for rendering blog posts.

Pull in the `react-syntax-highlighter` package, and dependencies.

```js
import { docco, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter';
```

### A super sneaky error

Be careful to watch we're pulling in the `/cjs/` subdirectory in the `react-syntax-highlighter` modules. Taken from this GitHub issue.

Trying to pull from the `esm` module results in a weird "Unexpected token export" error, that seems to originate from some strange typing, or TypeScript transpilation or something.

[https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353)

## Wrapper Component

Make a wrapper component for the highlighting theme.

```js
const MyHighlighter = ({ language, children }) => {
    return (
        <SyntaxHighlighter language={language} style={a11yDark}>
            {children}
        </SyntaxHighlighter>
    );
}
```

## Pass wrapper to MDXRemote

Now we need to pass the new wrapper component into the `components` prop so MDXRemote can make it available to our MDX content.

```js
const Post = (props) => {
    return (
        <Layout>
            <article className={postStyles.content}>
                <MDXRemote {...mdx} components={{ Button, Image, CenteredImage, MyHighlighter }} />
            </article>
        </Layout>
    );
}
```

<hr />

## References

- React, Composition vs. Inheritance - [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
- GH Issue, Unexpected token export: [https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230)
- Syntax highlighting, Gatsby, MDX, prism: [https://malikgabroun.com/blog/syntax-highlighting-in-gatsby-mdx/](https://malikgabroun.com/blog/syntax-highlighting-in-gatsby-mdx/)