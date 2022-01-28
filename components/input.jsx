import styled from 'styled-components';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  Input.displayName = 'Input';

  const { label, name, placeholder, required, type, warning } = props;
  if (type === 'textarea') {
    return (
      <InputLabel>
        <span style={{ fontWeight: warning ? 600 : 400 }}>{label}</span>
        <textarea
          id={name}
          rows='8'
          name={name}
          ref={ref}
          placeholder={placeholder}
          required={required}
          type={type || 'text'}
        />
      </InputLabel>
    );
  }
  return (
    <InputLabel>
      <span style={{ fontWeight: warning ? 600 : 400 }}>{label}</span>
      <input
        id={name}
        name={name}
        ref={ref}
        placeholder={placeholder}
        required={required}
        type={type || 'text'}
      />
    </InputLabel>
  );
});

export default Input;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  > span {
    margin: var(--spacing1) 0;
  }
`;
