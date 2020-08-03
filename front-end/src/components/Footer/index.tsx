import React from 'react';

import Links from './../Links';
import FooterOne from './../../assets/img/footer1.png';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container style={{ backgroundImage:`url(${FooterOne})` }}>
      <Links />
    </Container>
  );
}

export default Footer;