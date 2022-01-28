import { useEffect, useMemo, useState } from 'react';
import { imageBuilder } from '../../lib/sanity';
import { StyledParallax } from '../../styles/parallax.styled.js';
import ParallaxItem from './parallax-item';

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

export default function ParallaxWrapper({ parallaxItems, routePrefix }) {
  const initialFirstCoverImageUrl = useMemo(() => {
    return imageBuilder(parallaxItems[0].coverImage)
      .width(1240)
      .height(540)
      .url();
  }, [parallaxItems]);
  const [coverImageUrl, setCoverImageUrl] = useState(initialFirstCoverImageUrl);
  const debouncedCoverImageUrl = useDebounce(coverImageUrl, 400);

  return (
    <StyledParallax stretchHeight={parallaxItems?.length}>
      {parallaxItems.map((parallax, i) => (
        <ParallaxItem
          routePrefix={routePrefix}
          coverImageUrl={debouncedCoverImageUrl}
          setCoverImageUrl={setCoverImageUrl}
          parallax={parallax}
          index={i}
          parallaxItems={parallaxItems}
          key={i}
        />
      ))}
    </StyledParallax>
  );
}
