import { imageBuilder } from '../../lib/sanity';
import { ParallaxImageItem } from '../../styles/parallax.styled.js';
import ParallaxText from './parallax-text';

export default function ParallaxItem({ parallax, routePrefix, index }) {
  return (
    <div className={'wrapper'}>
      <div className={'text-wrapper'}>
        {/* <span ref={topRef} id='regnbue' className={'viewport-listener top'} /> */}
        <ParallaxText
          routePrefix={routePrefix}
          position={index % 2 === 0 ? 'left' : 'right'}
          date={parallax.date}
          slug={parallax.slug}
          author={parallax.author}
          title={parallax.title}
        />
        {/* <span ref={bottomRef} className={'viewport-listener bottom'} /> */}
      </div>
      <div className={'image-clip'}>
        <ParallaxImageItem
          url={imageBuilder(parallax.coverImage).width(1240).height(540).url()}
        />
      </div>
      <div className={'grid-child'} />
    </div>
  );
}
