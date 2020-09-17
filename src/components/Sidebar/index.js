import React, { useState } from 'react';
import { FiSliders, FiSettings } from 'react-icons/fi';

import minilogoImg from '../../assets/minilogo.svg';
import logoColorfulImg from '../../assets/logo-colorful.svg';

import { Container, Logo, Navigation, Menu, Divider } from './styles';

function Sidebar() {
  const [isCompacted, setIsCompacted] = useState(false);

  return (
    <Container>
      <Navigation isCompacted={isCompacted}>
        <div>
          <Logo
            src={isCompacted ? minilogoImg : logoColorfulImg}
            alt="Abstract"
          />

          <Divider />

          <Menu isCompacted={isCompacted}>
            <button type="button" className="active">
              <FiSliders />
              <span>Painel de controle</span>
            </button>

            <button type="button">
              <FiSettings />
              <span>Configurações</span>
            </button>
          </Menu>
        </div>

        <button type="button" onClick={() => setIsCompacted(state => !state)}>
          <img src="https://github.com/srsantosdev.png" alt="Samuel Ramos" />
          <div>
            <span>Samuel Ramos</span>
            <strong>Administrador</strong>
          </div>
        </button>
      </Navigation>
    </Container>
  );
}

export default Sidebar;
