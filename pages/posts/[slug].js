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
import { PostDivider, PostPadding } from '../../components/post/post.styled';
import Avatar from '../../components/post/avatar';
import Date from '../../components/post/date';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log({ post });
  return (
    <SiteWrapper>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <StyledContainer white>
          <SectionContainer>
            <article>
              <title>{post.title}</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
              <PostHeader title={post.title} coverImage={post.coverImage} />
              <PostDivider>
                <aside>
                  <div className='max-w-2xl mx-auto'>
                    <div className='block md:hidden mb-6'>
                      <h4>Updated:</h4>

                      <div className='mb-6 text-lg'>
                        <Date dateString={post.date} />
                      </div>
                      <h4>About the author:</h4>

                      <Avatar
                        name={post.author?.name}
                        picture={post.author?.picture}
                      >
                        {post.author?.bio && (
                          <PostBody content={post.author.bio} />
                        )}
                      </Avatar>
                    </div>
                  </div>
                </aside>
                <PostBody content={post.body} />
              </PostDivider>
            </article>

            <PostDivider>
              <aside></aside>
              <div>
                <SectionSeparator />

                <Comments comments={post.comments} />

                <Form _id={post._id} />
              </div>
            </PostDivider>

            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </SectionContainer>
        </StyledContainer>
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
