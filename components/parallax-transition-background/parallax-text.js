import Link from 'next/link';
import Date from '../date';

export default function ParallaxText({
  position,
  slug,
  title,
  date,
  author,
  routePrefix,
}) {
  return (
    <div className={`text-position ${position}`}>
      <div>
        <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
          <Link as={`${routePrefix}/${slug}`} href={`${routePrefix}/[slug]`}>
            <a className='hover:underline'>{title}&rarr;</a>
          </Link>
        </h3>
        <div className='mb-4 md:mb-0 text-lg'>
          <Date dateString={date} />
        </div>
      </div>
    </div>
  );
}
