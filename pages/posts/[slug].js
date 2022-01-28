import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/post/post-body';
import MoreStories from '../../components/post/more-stories';
import PostHeader from '../../components/post/post-header';
import Comments from '../../components/post/comments';
import SectionSeparator from '../../components/post/section-separator';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post/post-title';
import { CMS_NAME } from '../../lib/constants';
import Form from '../../components/post/form';
import SiteWrapper from '../../components/SiteWrapper';
import {
  SectionContainer,
  StyledContainer,
} from '../../styles/containers.styled';
import { PostPadding } from '../../components/post/post.styled';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <SiteWrapper>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <SectionContainer>
          <StyledContainer white>
            <article>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>

            <PostPadding>
              <Comments comments={post.comments} />
              <Form _id={post._id} />
              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </PostPadding>
          </StyledContainer>
        </SectionContainer>
      )}
    </SiteWrapper>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
