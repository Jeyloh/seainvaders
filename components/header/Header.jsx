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
} from './header.styled';

export default function Header({ currentHref }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window) {
        const setScroll = window.scrollY > 20;
        if (setScroll !== hasScrolled) {
          setHasScrolled(setScroll);
        }
      }
    }
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHasScrolled, hasScrolled]);
  return (
    <StyledHeader hasScrolled={hasScrolled}>
      <HeaderWrapper hasScrolled={hasScrolled}>
        <FlexContainer alignItems>
          <HeaderIcon hasScrolled={hasScrolled}>
            <Image
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
}
