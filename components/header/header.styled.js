import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  z-index: 15;
  background-color: var(--darkTransparent);

  ${(props) => props.hasScrolled && css``}
`;
export const HeaderWrapper = styled.div`
  padding: var(--spacing2);
  height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: height 300ms ease-in;

  ${(props) =>
    props.hasScrolled &&
    css`
      height: 30vh;
    `}
`;

export const HeaderIcon = styled.div`
  transition: width 300ms ease-in-out;
  width: 200px;

  ${(props) =>
    props.hasScrolled &&
    css`
      width: 80px;
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
