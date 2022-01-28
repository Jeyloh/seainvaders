import Footer from '../components/Footer';
import HtmlHead from '../components/Head';
import Header from './header/Header';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import {
  StyledContainer,
  FullPageContainer,
} from '../styles/containers.styled';
import WorkshopSection from './sections/WorkshopSection';
import ReflectSection from './sections/ReflectSection';
import CollaboratorsSection from './sections/CollaboratorsSection';

export default function SiteWrapper({ title, currentHref, children }) {
  return (
    <FullPageContainer>
      <HtmlHead title={title} />
      <Header currentHref={currentHref} />
      {children}
      <StyledContainer gradientBlue>
        <AboutSection />
      </StyledContainer>

      <StyledContainer blue>
        <ReflectSection />
      </StyledContainer>

      <StyledContainer gradientBlueReverse>
        <WorkshopSection />
      </StyledContainer>

      <StyledContainer>
        <ContactSection />
      </StyledContainer>

      <StyledContainer white>
        <CollaboratorsSection />
      </StyledContainer>
      <Footer />
    </FullPageContainer>
  );
}
