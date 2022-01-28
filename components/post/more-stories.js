import {
  FlexContainer,
  ThreeRowsContainer,
} from '../../styles/containers.styled';
import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
        More Stories
      </h2>
      <ThreeRowsContainer>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </ThreeRowsContainer>
    </section>
  );
}
