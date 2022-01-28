import { StyledParallax } from '../../styles/parallax.styled.js';
import ParallaxItem from './parallax-item';

export default function ParallaxWrapper({ parallaxItems, routePrefix }) {
  return (
    <StyledParallax stretchHeight={parallaxItems?.length}>
      {parallaxItems.map((parallax, i) => (
        <ParallaxItem
          parallax={parallax}
          index={i}
          routePrefix={routePrefix}
          parallaxItems={parallaxItems}
          key={i}
        />
      ))}
    </StyledParallax>
  );
}
