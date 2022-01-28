import styled, { css } from 'styled-components';

export const FullPageContainer = styled.div`
  margin-top: -23px;
  background-color: #00bfa5;
  background-image: url(/images/assets/reef.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const SectionContainer = styled.div`
  max-width: var(--max-page-width);
  margin: 0 auto;
  padding: var(--smallPadding);
`;

export const StyledContainer = styled.div`
  min-height: 40vh;

  background-color: ${(props) =>
    props.blue
      ? 'var(--blue)'
      : props.lightBlue
      ? 'var(--lightBlue)'
      : props.gradientBlueReverse
      ? 'var(--gradientBlueReverse)'
      : props.gradientBlue
      ? 'var(--gradientBlue)'
      : props.white
      ? 'white'
      : ''};

  background-image: ${(props) =>
    props.gradientBlueReverse
      ? 'var(--gradientBlueReverse)'
      : props.gradientBlue
      ? 'var(--gradientBlue)'
      : ''};

  padding: ${(props) => (props.padding ? 'var(--largePadding)' : 0)};
  margin: ${(props) => (props.margin ? '15vh' : 0)};
`;

export const ThreeRowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing3);
  margin: var(--spacing5) 0;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const RowItem = styled.div`
  text-align: center;

  p {
    text-align: left;
  }
  img {
    ${(props) =>
      !props.noImageRadius &&
      css`
        border-radius: 50%;
      `};
    height: 100px;
    max-height: 100px;
    min-height: 100px;
    width: 100px;
    max-width: 100px;
    min-width: 100px;
  }
  @media only screen and (max-width: 680px) {
    p {
      text-align: center;
    }
  }
`;

export const StyledCardContainer = styled.div`
  ${'' /* border: 1px solid var(--blue); */}
  transition: all 200ms ease-in;
  &:hover {
    * {
      color: var(--blue);
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  gap: ${(props) => (props.gap || 0) + 'px'};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
  ${(props) =>
    props.shouldWrap &&
    css`
      flex-wrap: wrap;

      > * {
        width: 20%;
      }
    `}

  ${(props) =>
    props.enableMediaAutoColumn &&
    css`
      @media only screen and (max-width: 680px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}
`;
