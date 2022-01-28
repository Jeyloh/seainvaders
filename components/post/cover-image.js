import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity';

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <Image
      width={1600}
      height={540}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder(imageObject).width(1600).height(700).url()}
    />
  );

  return (
    <div className='-mx-5 sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
