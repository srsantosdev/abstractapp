import React, { useState } from 'react';
import { FiSliders, FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

import minilogoImg from '../../assets/minilogo.svg';
import logoColorfulImg from '../../assets/logo-colorful.svg';

import { Container, Logo, Navigation, Menu, Divider } from './styles';

function Sidebar() {
  const [isCompacted, setIsCompacted] = useState(true);

  return (
    <Container
      layout
      onHoverStart={() => setIsCompacted(false)}
      onHoverEnd={() => setIsCompacted(true)}
      onMouseLeave={() => setIsCompacted(true)}
      transition={{ duration: 0.2 }}
    >
      <Navigation isCompacted={isCompacted}>
        <motion.div>
          <Logo
            src={isCompacted ? minilogoImg : logoColorfulImg}
            alt="Abstract"
          />

          <Divider />

          <Menu isCompacted={isCompacted}>
            <motion.button type="button" className="active">
              <FiSliders />
              <motion.span>Painel de controle</motion.span>
            </motion.button>

            <motion.button type="button">
              <FiSettings />
              <motion.span>Configurações</motion.span>
            </motion.button>
          </Menu>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => setIsCompacted(state => !state)}
        >
          <motion.img
            src="https://github.com/srsantosdev.png"
            alt="Samuel Ramos"
          />
          <motion.div>
            <motion.span>Samuel Ramos</motion.span>
            <motion.strong>Administrador</motion.strong>
          </motion.div>
        </motion.button>
      </Navigation>
    </Container>
  );
}

export default Sidebar;
