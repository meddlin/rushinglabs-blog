import Link from 'next/link';
import escapeHTML from 'escape-html';

export default function PostPreview({ 
  id, 
  year,
  title, 
  preview
}) {
  const articleLink = `/blog/${escapeHTML(year)}/${escapeHTML(id)}`;

  return (
    <li className='mb-10'>
      
      <div className="flex flex-col">
        <Link href={articleLink}>
          <a className="grow text-base text-black">{title}</a>
        </Link>
      </div>

      <p className="text-sm text-slate-700">{preview}</p>
    </li>
  )
}