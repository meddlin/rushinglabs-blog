import Link from 'next/link'
import Image from 'next/image';
import Date from './date'
import utilStyles from '../styles/utils.module.css'

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
            <div className="flex flex-col">
              <div>
                {(previewImage && previewImage !== undefined) 
                  && (previewImageWidth && previewImageWidth !== undefined) 
                  && (previewImageHeight && previewImageHeight !== undefined) ? 
                  (<a href={articleLink}>
                    <Image src={previewImage} width={previewImageWidth} height={previewImageHeight} />
                  </a>) 
                  : ''}
              </div>
              {(previewImageCreditText && previewImageCreditText !== undefined) 
                && (previewImageCreditUrl && previewImageCreditUrl !== undefined) ? 
                (<a href={previewImageCreditUrl}><span className="text-sm italic text-gray-400">{previewImageCreditText}</span></a>) 
                : ''}
            </div>
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