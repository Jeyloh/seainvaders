import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import {
  FlexContainer,
  StyledCardContainer,
} from '../../styles/containers.styled';
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <StyledCardContainer>
      <div className='mb-5'>
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <FlexContainer fullWidth>
        <Avatar name={author?.name} picture={author?.picture}>
          <FlexContainer column fullWidth>
            <div className='text-lg mb-4'>
              <Date dateString={date} />
            </div>
            <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          </FlexContainer>
        </Avatar>
      </FlexContainer>
    </StyledCardContainer>
  );
}
