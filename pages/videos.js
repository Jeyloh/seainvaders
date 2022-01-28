import SiteWrapper from '../components/SiteWrapper';
import { SectionContainer, StyledContainer } from '../styles/containers.styled';
import content from '../content/no.json';

export default function Videos() {
  return (
    <SiteWrapper currentHref={'/videos'}>
      <StyledContainer white>
        <SectionContainer>
          <h1>{content.videos.title}</h1>
          <p>{content.videos.subtitle}</p>
          {content.videos.list.map((video) => (
            <>
              <h2>{video.title}</h2>
              <iframe
                key={video.alt}
                width={'100%'}
                height='500'
                src={video.url}
                title='YouTube video player'
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </>
          ))}
        </SectionContainer>
      </StyledContainer>
    </SiteWrapper>
  );
}
