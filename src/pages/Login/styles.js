import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Content = styled.div`
  width: 500px;
  padding: 56px 72px;

  header {
    margin-bottom: 40px;

    > div {
      margin-top: 80px;

      h1 {
        font-weight: bold;
        font-size: 30px;
        color: #272338;
      }

      span {
        font-size: 16px;
        color: #b1b1b1;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    > span {
      display: flex;
      justify-content: flex-end;
      margin: 8px 0 24px;
    }

    a {
      text-decoration: none;
      font-size: 14px;
      color: #b1b1b1;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#b1b1b1')};
      }
    }

    button {
      flex: 1;
      border: 0;

      background: #11998e;
      border-radius: 5px;

      font-weight: bold;
      font-size: 16px;
      color: #ffffff;

      padding: 10px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#11998e')};
      }
    }
  }

  > span {
    font-size: 16px;
    line-height: 19px;
    color: #272338;

    > a {
      font-weight: bold;
      color: #11998e;
      text-decoration: none;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(211.7deg, #11998e 1.99%, #38ef7d 155.67%);
`;
