import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import content from '../../content/no.json';
import Image from 'next/image';
import { FlexContainer } from '../../styles/containers.styled';
import {
  HeaderContent,
  HeaderIcon,
  StyledHeader,
  HeaderWrapper,
  Navigation,
  NavItem,
  MobileHamburgerButton,
  MobileNavigation,
} from './header.styled';
import { useWindowSize } from '../../hooks/useMobileSize';

export default function Header({ currentHref }) {
  const size = useWindowSize();

  return size.width > 768 ? (
    <WebHeader currentHref={currentHref} />
  ) : (
    <MobileHeader currentHref={currentHref} />
  );
}

const WebHeader = ({ currentHref }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasScrolledFurther, setHasScrolledFurther] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window) {
        const setScroll = window.scrollY > 20;
        const setScrollFurther = window.scrollY > 200;

        if (setScrollFurther) {
          if (!setScroll) {
            setHasScrolled(false);
            setHasScrolledFurther(false);
          }
        } else {
          if (setScroll !== hasScrolled) {
            setHasScrolled(setScroll);
          }
          if (setScrollFurther !== hasScrolledFurther) {
            setHasScrolledFurther(setScrollFurther);
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHasScrolled, hasScrolled, setHasScrolledFurther, hasScrolledFurther]);
  return (
    <StyledHeader
      hasScrolled={hasScrolled}
      hasScrolledFurther={hasScrolledFurther}
    >
      <HeaderWrapper
        hasScrolled={hasScrolled}
        hasScrolledFurther={hasScrolledFurther}
      >
        <FlexContainer alignItems={'center'}>
          <HeaderIcon hasScrolled={hasScrolled}>
            <Image
              objectPosition={'left center'}
              width={200}
              height={200}
              objectFit={'contain'}
              src={'/images/assets/logo.png'}
              alt='coolart logo'
            />
          </HeaderIcon>
          <HeaderContent>
            <h1>{content.header.title}</h1>
            <h2>{content.header.subtitle}</h2>
          </HeaderContent>
        </FlexContainer>
        <Navigation>
          {content.header.nav.map(({ text, href }) => (
            <NavItem isCurrent={currentHref === href} key={text}>
              <Link href={href}>{text}</Link>
            </NavItem>
          ))}
        </Navigation>
      </HeaderWrapper>
    </StyledHeader>
  );
};

const MobileHeader = ({ currentHref }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader hasScrolled={false} hasScrolledFurther={false}>
      <HeaderWrapper hasScrolled={false} hasScrolledFurther={false}>
        <FlexContainer alignItems={'center'}>
          <HeaderIcon hasScrolled={false} hasScrolledFurther={false}>
            <Image
              objectPosition={'left center'}
              width={200}
              height={200}
              objectFit={'contain'}
              src={'/images/assets/logo.png'}
              alt='coolart logo'
            />
          </HeaderIcon>
          <HeaderContent>
            <h1>{content.header.title}</h1>
            <h2>{content.header.subtitle}</h2>
          </HeaderContent>
        </FlexContainer>
        <MobileHamburgerButton menuOpen={menuOpen} onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </MobileHamburgerButton>
        <MobileNavigation menuOpen={menuOpen}>
          {content.header.nav.map(({ text, href }) => (
            <NavItem isCurrent={currentHref === href} key={text}>
              <Link href={href}>{text}</Link>
            </NavItem>
          ))}
        </MobileNavigation>
      </HeaderWrapper>
    </StyledHeader>
  );
};
