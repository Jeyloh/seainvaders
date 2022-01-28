import styled from 'styled-components';

export default function Button({ disabled, type, text, onClick }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: var(--buttonPadding);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-in;
  border: 1px solid var(--blue);
  background-color: var(--blue);
  margin: var(--spacing1) 0;
  ${
    '' /* font-family: var(--font-header);
  font-size: var(--font-sm); */
  }

  &:hover {
    background-color: var(--lightBlue);
  }
`;
