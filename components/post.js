import Link from 'next/link'
import Image from 'next/image';
import Date from './date'
import utilStyles from '../styles/utils.module.css'
import PostPreviewImage from './post-preview-image';

export default function Post({ 
  id, 
  date, 
  title, 
  preview, 
  previewImage, 
  previewImageWidth, 
  previewImageHeight, 
  previewImageCreditText,
  previewImageCreditUrl,
  section 
}) {
  const articleLink = `/blog/${id}`;

  return (
    <li className={utilStyles.listItem}>
      
      <div className="flex flex-col">
        <div className="justify-center items-center">
            <PostPreviewImage 
              articleLink={articleLink}
              previewImage={previewImage} 
              previewImageWidth={previewImageWidth}
              previewImageHeight={previewImageHeight} 
              previewImageCreditText={previewImageCreditText}
              previewImageCreditUrl={previewImageCreditUrl} />
        </div>
        <Link href={articleLink}>
          <a>{title}</a>
        </Link>
      </div>

      <br />

      <small className={utilStyles.subpreview}>
        {section ? (<text><a href={`/categories/${section}`}>{section}</a>&nbsp;&mdash;&nbsp;</text>) 
          : ''}
        {date ? (<Date dateString={date} />) : ''}
      </small>

      <p>{preview}</p>

      <Link href={`/blog/${id}`}>
        <a className={utilStyles.readMoreLink}>Read More &mdash;&gt;</a>	
      </Link>
    </li>
  )
}