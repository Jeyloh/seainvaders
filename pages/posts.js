import ParallaxWrapper from '../components/parallax-sections/parallax-wrapper';
import SiteWrapper from '../components/SiteWrapper';
import { getAllPostsForHome } from '../lib/api';

export default function Index({ allPosts, preview }) {
  //   const heroPost = allPosts[0];
  //   const morePosts = allPosts.slice(1);

  const parallaxItemsFormatted = allPosts.map((post, index) => {
    return {
      ...post,
      coverImage: post.coverImage,
      title: post.title,
      slug: post.slug,
      _id: index,
      position: index % 2 === 0 ? 'right' : 'left',
    };
  });
  return (
    <SiteWrapper currentHref={'/posts'}>
      {/* {heroPost && (
            <ParallaxItem
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}

      <ParallaxWrapper
        routePrefix={'/posts'}
        parallaxItems={parallaxItemsFormatted}
      />
    </SiteWrapper>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
