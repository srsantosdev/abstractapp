import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
  }

  & + div {
    margin-top: 16px;
  }
`;

export const Field = styled.div`
  display: flex;
  background: #fff;
  padding: 12px 8px;
  border-radius: 5px;

  input {
    flex: 1;
    border: 0;
    background: transparent;
  }
`;
