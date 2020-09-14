import styled from 'styled-components';
import { shade } from 'polished';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  height: 100%;

  overflow-x: hidden;
`;

export const Content = styled(motion.div).attrs({
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
})`
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

export const Background = styled(motion.div).attrs({
  initial: { x: '100%' },
  animate: { x: 0 },
  transition: { duration: 0.5 },
})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(211.7deg, #11998e 1.99%, #38ef7d 155.67%);
`;
