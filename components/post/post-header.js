import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import { PostPadding } from './post.styled';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostPadding>
        <PostTitle>{title}</PostTitle>

        <div className='hidden md:block md:mb-12'>
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
      </PostPadding>

      <div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <PostPadding>
        <div className='max-w-2xl mx-auto'>
          <div className='block md:hidden mb-6'>
            <Avatar name={author?.name} picture={author?.picture} />
          </div>
          <div className='mb-6 text-lg'>
            <Date dateString={date} />
          </div>
        </div>
      </PostPadding>
    </>
  );
}
