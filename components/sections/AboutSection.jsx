import content from '../../content/no.json';
import Image from 'next/image';
import {
  RowItem,
  SectionContainer,
  ThreeRowsContainer,
} from '../../styles/containers.styled';

export default function AboutSection() {
  return (
    <SectionContainer>
      <h1>{content.about.title}</h1>
      <p>{content.about.body}</p>

      <ThreeRowsContainer>
        <RowItem>
          <Image
            src={'/images/assets/octo.jpeg'}
            height={'100px'}
            width={'100px'}
            alt={' '}
          />
          <h2>{content.about.vision.title}</h2>
          <p>{content.about.vision.text}</p>
        </RowItem>
        <RowItem>
          <Image
            src={'/images/assets/salmon.png'}
            height={'100px'}
            width={'100px'}
            alt={' '}
          />
          <h2>{content.about.children.title}</h2>
          <p>{content.about.children.text}</p>
        </RowItem>
        <RowItem>
          <Image
            src={'/images/assets/betta.jpeg'}
            height={'100px'}
            width={'100px'}
            alt={' '}
          />
          <h2>{content.about.art.title}</h2>
          <p>{content.about.art.text}</p>
        </RowItem>
      </ThreeRowsContainer>
    </SectionContainer>
  );
}
