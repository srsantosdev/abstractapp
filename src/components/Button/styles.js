import styled from 'styled-components';

import { shade } from 'polished';

import { motion } from 'framer-motion';

export const Container = styled(motion.button).attrs({
  whileHover: { scale: 0.98 },
  transition: { duration: 0.5 },
})`
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
`;
