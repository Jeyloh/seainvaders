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

export const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--darkTransparent);
  transition: top 500ms ease-in;
  top: 0;
  z-index: 50;

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
