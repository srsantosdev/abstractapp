import React from 'react';

import Sidebar from '../../components/Sidebar';

import { Container, Content, Header } from './styles';

function Dashboard() {
  return (
    <Container>
      <Sidebar />

      <Content>
        <Header />
      </Content>
    </Container>
  );
}

export default Dashboard;
