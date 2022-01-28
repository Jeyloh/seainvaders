import { useEffect, useRef } from 'react';
import useIsInViewport from 'use-is-in-viewport';
import { imageBuilder } from '../../lib/sanity';
import { ParallaxImageItem } from '../../styles/parallax.styled.js';
import ParallaxText from './parallax-text';

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
export default function ParallaxItem({
  parallax,
  routePrefix,
  setCoverImageUrl,
  coverImageUrl,
  index,
}) {
  const [bottomRefInViewport, bottomRef] = useIsInViewport({
    modBottom: '300px',
  });
  const [textRefInViewport, textRef] = useIsInViewport({
    modBottom: '100px',
    modTop: '100px',
  });
  // const [coverImageIndex, setCoverImageIndex] = useState(0);

  // const { prevIndex, nextIndex } = useMemo(() => {
  //   const prevIndex = index === 0 ? 0 : -1;
  //   const nextIndex = index === parallaxItems.length - 1 ? 0 : 1;
  //   return {
  //     prevIndex,
  //     nextIndex,
  //   };
  // }, [index, parallaxItems]);

  useEffect(() => {
    // if (topRefInViewport) {
    //   setCoverImageIndex(prevIndex);
    // } else
    // if (textRefInViewport) {
    //   setCoverImageIndex(nextIndex);
    // } else setCoverImageIndex(0);

    setCoverImageUrl(
      imageBuilder(parallax.coverImage).width(1240).height(540).url()
    );
  }, [textRefInViewport]);

  return (
    <div className={'wrapper'}>
      <div className={'text-wrapper'}>
        {/* <span ref={topRef} id='regnbue' className={'viewport-listener top'} /> */}
        <span ref={textRef}>
          <ParallaxText
            routePrefix={routePrefix}
            position={parallax.position || index % 2 === 0 ? 'left' : 'right'}
            date={parallax.date}
            slug={parallax.slug}
            author={parallax.author}
            title={parallax.title}
          />
        </span>
        {/* <span ref={bottomRef} className={'viewport-listener bottom'} /> */}
      </div>
      <div className={'image-clip'}>
        <ParallaxImageItem url={coverImageUrl} />
      </div>
    </div>
  );
}
