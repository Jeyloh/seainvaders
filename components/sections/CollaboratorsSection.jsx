import content from '../../content/no.json';
import Image from 'next/image';
import {
  FlexContainer,
  RowItem,
  SectionContainer,
  ThreeRowsContainer,
} from '../../styles/containers.styled';

export default function CollaboratorsSection() {
  return (
    <SectionContainer>
      <h1>{content.partners.title}</h1>

      <FlexContainer wrap>
        {content.partners.list.map((partnerItem) => (
          <RowItem key={partnerItem.alt}>
            <Image
              src={partnerItem.url}
              height={'100px'}
              width={'100px'}
              alt={partnerItem.alt}
            />
          </RowItem>
        ))}
      </FlexContainer>
    </SectionContainer>
  );
}
