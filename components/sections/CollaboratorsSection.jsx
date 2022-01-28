import content from '../../content/no.json';
import Image from 'next/image';
import {
  FlexContainer,
  RowItem,
  SectionContainer,
} from '../../styles/containers.styled';

export default function CollaboratorsSection() {
  return (
    <SectionContainer>
      <h1>{content.partners.title}</h1>

      <FlexContainer
        enableMediaAutoColumn
        gap={30}
        alignItems={'center'}
        justifyContent={'space-between'}
        shouldWrap
      >
        {content.partners.list.map((partnerItem) => (
          <RowItem noImageRadius key={partnerItem.alt}>
            <Image
              src={partnerItem.url}
              width={100}
              height={100}
              layout={'responsive'}
              objectFit='contain'
              alt={partnerItem.alt}
            />
            <p>{partnerItem.alt}</p>
          </RowItem>
        ))}
      </FlexContainer>
    </SectionContainer>
  );
}
