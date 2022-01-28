import Head from 'next/head';
import styles from '../styles/ImageCarousel.module.css';
import React from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Image from 'next/image';

export default function ImageCarousel({ images, autoPlay, children }) {
  return (
    <div className={styles.ImageCarousel}>
      <div className={styles.Overlay}>{children}</div>
      <div className={styles.Carousel}>
        <Carousel
          autoPlay={autoPlay}
          interval={6000}
          transitionTime={1000}
          infiniteLoop
          swipeable={false}
          stopOnHover={false}
          showArrows={false}
          showIndicators={false}
          renderThumbs={() => null}
          renderStatus={() => null}
          renderControls={() => null}
          renderArrowPrev={() => null}
          renderArrowNext={() => null}
          renderIndicator={() => null}
        >
          {images.map((image) => (
            <div key={image.alt}>
              <Image src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
