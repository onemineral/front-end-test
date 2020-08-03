import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Video from '../Video';
import Info from '../Info';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Video />
      <Info />
      <Footer />
    </Container>
  );
};

export default Layout;