import Image from 'next/image';

/**
 * ImageContainer - wraps the next/image component to provide standardized use/placement of alt, credits
 * - Defaults to a center image placement
 * - Places caption, image credit, and image credit link directly below the image
 * - ImageContainer is not exported because it is only supposed to be an internal utility to these image 
 *      management components
 */
function ImageContainer({ children, srcUrl, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, flexDirection: `column` }}>
            <div style={{ filter: `drop-shadow(0.15rem 0.25rem 0.45rem darkgrey)` }}>
                <div style={{ filter: `drop-shadow(0.15rem 0.25rem 0.45rem darkgrey)` }}>
                    <Image src={srcUrl}
                        height={height}
                        width={width}
                        alt={alt}
                        placeholder={placeholder}
                        blurDataURL={blurDataURL} />
                </div>
                {caption ? (<p>
                    <i>
                        {caption}
                    </i>
                </p>) : ''}
                {imageCredit || imageCreditLink ? (
                    <p>
                        <i>Credit: <a href={imageCreditLink}>{imageCredit}</a></i>
                    </p>
                ) : ''}
            </div>
        </div>
    );
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function CenteredImage({ srcUrl, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <ImageContainer
            srcUrl={srcUrl}
            height={height}
            width={width}
            placeholder={placeholder}
            blurDataURL={blurDataURL}

            alt={alt}
            caption={caption}
            imageCredit={imageCredit}
            imageCreditLink={imageCreditLink}
        />
    );
}

function LeftImage({ children, srcUrl, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <div style={{ display: `flex`, justifyContent: `flex-start`, alignItems: `center`, flexDirection: `row` }}>
            <ImageContainer
                srcUrl={srcUrl}
                height={height}
                width={width}
                placeholder={placeholder}
                blurDataURL={blurDataURL}

                alt={alt}
                caption={caption}
                imageCredit={imageCredit}
                imageCreditLink={imageCreditLink}
            />

            <div style={{ minWidth: `30%`, marginLeft: `1em` }}>
                {children}
            </div>
        </div>
    );
}

function RightImage({ children, srcUrl, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <div style={{ display: `flex`, justifyContent: `flex-end`, alignItems: `center`, flexDirection: `row` }}>
            <div style={{ minWidth: `30%`, marginRight: `1em` }}>
                {children}
            </div>
            <ImageContainer
                srcUrl={srcUrl}
                height={height}
                width={width}
                placeholder={placeholder}
                blurDataURL={blurDataURL}

                alt={alt}
                caption={caption}
                imageCredit={imageCredit}
                imageCreditLink={imageCreditLink}
            />
        </div>
    );
}

export { CenteredImage, LeftImage, RightImage };