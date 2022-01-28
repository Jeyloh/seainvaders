import content from '../../content/no.json';
import { SectionContainer } from '../../styles/containers.styled';

export default function ReflectSection() {
  return (
    <SectionContainer>
      <h1>{content.reflect.title}</h1>
      <p>{content.reflect.body}</p>
    </SectionContainer>
  );
}
