import SiteWrapper from '../components/SiteWrapper';
import Script from 'next/script';
import { SectionContainer, StyledContainer } from '../styles/containers.styled';
import { useRef, useEffect, useState } from 'react';

export default function Gallery() {
  const elfsightRef = useRef();
  const [customDone, setCustomDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      removeExtraGalleryStuff();
    }, 3000);
  }, [elfsightRef, customDone]);

  function removeExtraGalleryStuff() {
    if (elfsightRef.current) {
      const anchor = elfsightRef.current.querySelector('a.eapps-link');
      if (anchor) {
        elfsightRef.current.removeChild(anchor);
      }

      const button = elfsightRef.current.querySelector(
        '.eapps-instagram-feed-posts-grid-load-more-text'
      );
      if (button) {
        button.classList.add('eapps-button');
      }

      const buttonWrapper = elfsightRef.current.querySelector(
        '.eapps-instagram-feed-posts-grid-load-more'
      );
      if (buttonWrapper) {
        buttonWrapper.classList.add('eapps-button-wrapper');
      }

      const title = elfsightRef.current.querySelector('.eui-widget-title');
      if (title) {
        title.classList.add('eapps-title');
        title.innerText = 'Follow us on Instagram!';
      }
      if (anchor && button && buttonWrapper && title) {
        setCustomDone(true);
      }
    }
  }

  return (
    <SiteWrapper currentHref={'/gallery'}>
      <SectionContainer>
        <StyledContainer white>
          {/* <Script
            src='https://assets.juicer.io/embed.js'
            type='text/javascript'
          />
          <span className={'Juicer'}>
            <div className='juicer-feed' data-feed-id='sedinzunic' />
          </span> */}
          <Script src='https://apps.elfsight.com/p/platform.js' defer></Script>
          <div
            ref={elfsightRef}
            className='elfsight-app-85995292-d207-43ec-b045-7869ab407011 elfsight'
          ></div>
        </StyledContainer>
      </SectionContainer>
    </SiteWrapper>
  );
}
