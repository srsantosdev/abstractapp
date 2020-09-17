import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  overflow: hidden;
  background: #0a090f;

  padding: 24px 12px;
`;

export const Logo = styled(motion.img)``;

export const Navigation = styled(motion.nav)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > button {
    background: transparent;
    border: 0;

    display: flex;
    align-items: flex-start;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    > div {
      display: ${props => (props.isCompacted ? 'none' : 'flex')};
      flex-direction: column;
      align-items: flex-start;

      margin-left: 16px;

      span {
        font-size: 16px;
        color: #ffffff;
      }

      strong {
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        color: #22bf86;
      }
    }
  }
`;

export const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  > button {
    width: 100%;
    border: 0;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: ${props => (props.isCompacted ? 'center' : 'flex-start')};

    transition: color 0.2s;

    color: #fff;

    > svg {
      height: 24px;
      width: 24px;
    }

    &.active {
      color: #22bf86;
    }

    &:hover {
      color: #22bf86;
    }

    > span {
      display: ${props => (props.isCompacted ? 'none' : 'flex')};
      min-width: 200px;
      margin-left: 16px;
      font-size: 16px;
      text-align: left;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;

export const Divider = styled.span`
  width: 100%;
  height: 0.5px;

  display: block;

  background: #272338;
  border-radius: 1px;

  margin: 24px 0;
`;
