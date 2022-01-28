import Link from 'next/link';
import Date from '../post/date';

export default function ParallaxText({
  position,
  slug,
  title,
  date,
  routePrefix,
  author,
}) {
  return (
    <div className={`text-position ${position}`}>
      <div>
        <Link as={`${routePrefix}/${slug}`} href={`${routePrefix}/[slug]`}>
          <a>
            <h1>{title} &rarr;</h1>
            <p>
              <Date dateString={date} />
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
