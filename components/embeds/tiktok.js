import { useEffect, useState, useRef } from "react";
import { Helmet } from 'react-helmet';

/**
 * Based on: https://github.com/andrewszucs/react-tiktok
 * 
 * The linked repo is for an npm package built to enable
 * embedding TikTok videos directly into React apps with
 * just the video URL. However, the code using `window`
 * and MutationObserver was breaking the component, as
 * a "window not available" error was happening.
 */

const TIKTOK_OEMBED_BASE_URL = `https://www.tiktok.com/oembed`;

export default function TikTok({ url })  {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState();
    const [html, setHtml] = useState();
    const [scriptSrc, setScriptSrc] = useState();

    const ref = useRef(null);

    useEffect(() => {
        fetch(`${TIKTOK_OEMBED_BASE_URL}?url=${url}`)
            .then((res) => res.json())
            .then((res) => {
                const htmlString = res.html;
                const tempElement = document.createElement('div');
                tempElement.innerHTML = htmlString;

                const scriptTag = tempElement.getElementsByTagName('script')[0];

                setScriptSrc(scriptTag && scriptTag.src);
                setHtml(htmlString.substr(0, htmlString.indexOf('<script')));
            })
            .catch((err) => setError(err));
    }, [url]);

    return (
        <>
            <Helmet>
                <script id='ttEmbedder' async src={scriptSrc} />
            </Helmet>
            <div
                ref={ref}
                style={{ display: 'flex' }}
                dangerouslySetInnerHTML={{ __html: html || '' }}
            />
        </>
    );
}