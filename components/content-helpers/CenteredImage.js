import Image from 'next/image';

export default function CenteredImage({ srcUrl, height, width, alt, caption, imageCredit, imageCreditLink, placeholder, blurDataURL }) {

    return (
        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, flexDirection: `column` }}>
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
    );
}