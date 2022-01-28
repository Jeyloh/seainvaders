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
  HeaderPositionalWrapper,
} from './header.styled';

export default function Header({ currentHref }) {
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
    <>
      <StyledHeader
        hasScrolled={hasScrolled}
        hasScrolledFurther={hasScrolledFurther}
      >
        <HeaderWrapper
          hasScrolled={hasScrolled}
          hasScrolledFurther={hasScrolledFurther}
        >
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
    </>
  );
}
