import Link from 'next/link'
import Image from 'next/image';
import Date from './date'
import utilStyles from '../styles/utils.module.css'

export default function Post({ id, date, title, preview, previewImage, section }) {
  return (
    <li className={utilStyles.listItem}>
      
      {/* If previewImage exists, then display it -- else, leave blank. */}
      {previewImage && previewImage !== undefined ? 
        (<Image src={previewImage} width="500" height="350" />) 
        : ''}

      <Link href={`/blog/${id}`}>
        <a>{title}</a>
      </Link>
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