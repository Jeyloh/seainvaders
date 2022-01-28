import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import { PostPadding } from './post.styled';

export default function PostHeader({ title, coverImage }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
    </>
  );
}
