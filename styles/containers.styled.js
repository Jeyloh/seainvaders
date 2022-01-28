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
  padding: var(--largePadding);
`;

export const StyledContainer = styled.div`
  min-height: 60vh;
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

  ${
    '' /* color: ${(props) => (props.blue ? 'white' : props.lightBlue ? 'black' : '')}; */
  }

  padding: ${(props) => (props.padding ? 'var(--largePadding)' : 0)};

  margin: ${(props) => (props.margin ? '15vh' : 0)};
`;

export const ThreeRowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing3);
  margin: var(--spacing3) 0;
`;

export const RowItem = styled.div`
  text-align: center;
  min-height: 350px;

  p {
    text-align: left;
  }
  img {
    border-radius: 50%;
    height: 100px;
    max-height: 100px;
    min-height: 100px;
    width: 100px;
    max-width: 100px;
    min-width: 100px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props) => (props.alignItems ? 'center' : 'flex-start')};

  ${(props) =>
    props.wrap &&
    css`
      flex-wrap: wrap;

      > * {
        width: 20%;
      }
    `}
`;
