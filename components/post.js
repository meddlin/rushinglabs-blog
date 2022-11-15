import Link from 'next/link'
import Image from 'next/image';
import Date from './date'
import utilStyles from '../styles/utils.module.css'

export default function Post({ id, date, title, preview, previewImage, previewImageWidth, previewImageHeight, section }) {
  return (
    <li className={utilStyles.listItem}>
      
      <div className="flex flex-col">
        <div className="justify-center items-center">
          {(previewImage && previewImage !== undefined) 
            && (previewImageWidth && previewImageWidth !== undefined) 
            && (previewImageHeight && previewImageHeight !== undefined) ? 
            (<Image src={previewImage} width={previewImageWidth} height={previewImageHeight} />) 
            : ''}
        </div>
        <Link href={`/blog/${id}`}>
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