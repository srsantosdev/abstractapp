import React, { useRef, useState, useCallback } from 'react';

import { Container, Field } from './styles';

function Input({ label, ...rest }) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current.value);
  }, []);

  return (
    <Container>
      <label>{label}</label>

      <Field isFocused={isFocused} isFilled={isFilled}>
        <input
          ref={inputRef}
          type="text"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      </Field>
    </Container>
  );
}

export default Input;
