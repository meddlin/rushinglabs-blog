import Image from 'next/image';

/**
 * ImageContainer - wraps the next/image component to provide standardized use/placement of alt, credits
 * - Defaults to a center image placement
 * - Places caption, image credit, and image credit link directly below the image
 * - ImageContainer is not exported because it is only supposed to be an internal utility to these image 
 *      management components
 */
function ImageContainer({ children, src, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, flexDirection: `column` }}>
            <div style={{ filter: `drop-shadow(0.15rem 0.25rem 0.45rem darkgrey)` }}>
                <div style={{ filter: `drop-shadow(0.15rem 0.25rem 0.45rem darkgrey)` }}>
                    <Image src={src}
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
 * CenteredImage
 * - An image component for center-aligned images, and no slots for children content. 
 * - All caption and image credit information is rendered directly beneath the image, center-aligned too.
 * 
 * @param {*} param0 
 * @returns 
 */
function CenteredImage({ src, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <ImageContainer
            src={src}
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

/**
 * LeftImage
 * - An image component with left-aligned image, and content to the right.
 * @param {*} param0 
 * @returns 
 */
function LeftImage({ children, src, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <div style={{ display: `flex`, justifyContent: `flex-start`, alignItems: `center`, flexDirection: `row` }}>
            <ImageContainer
                src={src}
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

/**
 * RightImage
 * - An image component with right-aligned image, and content to the left.
 * @param {*} param0 
 * @returns 
 */
function RightImage({ children, src, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {
    return (
        <div style={{ display: `flex`, justifyContent: `flex-end`, alignItems: `center`, flexDirection: `row` }}>
            <div style={{ minWidth: `30%`, marginRight: `1em` }}>
                {children}
            </div>
            <ImageContainer
                src={src}
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