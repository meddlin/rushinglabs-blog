import Image from 'next/image';

export default function CenteredImage({ srcUrl, height, width, alt, caption, imageCredit, imageCreditLink }) {

    return (
        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, flexDirection: `column` }}>
            <div>
                <Image src={srcUrl}
                    height={height}
                    width={width}
                    alt={alt} />
            </div>
            {caption ? (<p>
                <i>
                    This is a caption - {caption}
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