import Link from 'next/link';
import Image from 'next/image';

const PostPreviewImage = ({
    articleLink,
    previewImage, 
    previewImageWidth, 
    previewImageHeight, 
    previewImageCreditText,
    previewImageCreditUrl,
}) => {
    return (
        <div className="flex flex-col">
            <div>
            {(previewImage && previewImage !== undefined) 
                && (previewImageWidth && previewImageWidth !== undefined) 
                && (previewImageHeight && previewImageHeight !== undefined) ? 
                (
                    <Image src={previewImage} width={previewImageWidth} height={previewImageHeight} />
                ) 
                : ''}
            </div>
            {(previewImageCreditText && previewImageCreditText !== undefined) 
            && (previewImageCreditUrl && previewImageCreditUrl !== undefined) ? 
            (<a href={previewImageCreditUrl}><span className="text-sm italic text-gray-400">{previewImageCreditText}</span></a>) 
            : ''}
        </div>
    );
};

export default PostPreviewImage;