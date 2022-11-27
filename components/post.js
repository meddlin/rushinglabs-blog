import Link from 'next/link'
import Date from './date'
import utilStyles from '../styles/utils.module.css'
import PostPreviewImage from './post-preview-image';
import escapeHTML from 'escape-html';

export default function Post({ 
  id, 
  year,
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
  const articleLink = `/blog/${escapeHTML(year)}/${escapeHTML(id)}`;

  return (
    <li className='mb-10'>
      
      <div className="flex flex-col">
        <Link href={articleLink}>
          <a className="grow text-base text-black">{title}</a>
        </Link>

        <span className="text-sm italic">
          {section ? (
              <a href={`/categories/${section}`} 
                className="text-slate-700 decoration-indigo-500">{section}</a>
            ) : ''}
        </span>
      </div>

      <p className="text-sm text-slate-700">{preview}</p>
    </li>
  )
}