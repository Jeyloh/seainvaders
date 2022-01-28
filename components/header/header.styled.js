import styled, { css } from 'styled-components';

export const HeaderPositionalWrapper = styled.div`
  padding-top: 522px;
  transition: padding-top 500ms ease-in;
  z-index: 15;

  ${(props) =>
    props.hasScrolled &&
    css`
      padding-top: 150px;
    `}
  ${(props) => props.hasScrolledFurther && css``}
`;

export const MobileHamburgerButton = styled.button`
  position: fixed;
  right: var(--spacing3);
  top: var(--spacing3);
  box-shadow: 0 0 0px 10px var(--darkTransparent),
    inset 0 0 0px 20px var(--darkTransparent);
  background: transparent;
  padding: var(--spacing2);
  outline: none;
  border: none;
  width: var(--mobileMenuButtonWidth);
  height: var(--mobileMenuButtonHeight);
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 60;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: calc(var(--mobileMenuButtonHeight) * 0.5);
  }

  span:nth-child(4) {
    top: calc(var(--mobileMenuButtonHeight) * 1);
  }

  ${(props) =>
    props.menuOpen &&
    css`
      span:nth-child(1) {
        top: calc(var(--mobileMenuButtonHeight) * 0.2);
        width: 0%;
        left: 50%;
      }

      span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      span:nth-child(4) {
        top: calc(var(--mobileMenuButtonHeight) * 0.2);
        width: 0%;
        left: 50%;
      }
    `}
`;

export const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--darkTransparent);
  transition: top 500ms ease-in;
  top: 0;
  z-index: 40;

  ${(props) => props.hasScrolled && css``}
  ${(props) =>
    props.hasScrolledFurther &&
    css`
      ${'' /* background-color: var(--blue); */}
    `}
`;
export const HeaderWrapper = styled.div`
  padding: var(--spacing2);
  max-width: var(--max-page-width);
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: height 500ms ease-in;

  ${(props) =>
    props.hasScrolled &&
    css`
      height: 120px;
    `}
`;

export const HeaderIcon = styled.div`
  transition: width 500ms ease-in;
  width: 200px;

  ${(props) =>
    props.hasScrolled &&
    css`
      width: 80px;
    `}
`;

export const MobileNavigation = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 200vw;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: var(--gradientBlue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing2);
  opacity: 0;
  z-index: 50;
  transition: left 300ms ease-in-out, opacity 300ms ease-in;

  ${(props) =>
    props.menuOpen &&
    css`
      left: 0;
      opacity: 1;
    `}
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItem = styled.span`
  color: white;
  font-size: var(--font-lg);
  font-family: var(--font-header);
  margin-left: var(--spacing2);

  ${(props) =>
    props.isCurrent &&
    css`
      box-shadow: 0 2px 0 white;
    `}
`;

export const HeaderContent = styled.div`
  h1 {
    border-bottom: 3px solid white;
    font-size: var(--font-xxl);
    color: white;
    line-height: var(--font-xxl);
  }
  h2 {
    font-size: var(--font-md);
    color: white;
  }

  h1,
  h2 {
    margin: 0;
  }
`;
