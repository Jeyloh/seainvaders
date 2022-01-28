import content from '../../content/no.json';
import { SectionContainer } from '../../styles/containers.styled';

export default function WorkshopSection() {
  return (
    <SectionContainer>
      <h1>{content.workshops.title}</h1>
      <p>{content.workshops.body}</p>
    </SectionContainer>
  );
}
