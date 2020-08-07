import React from 'react';

import Footerlinks from '../FooterLinks';
import FooterOne from './../../assets/img/footer1.png';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container style={{ backgroundImage:`url(${FooterOne})` }}>
      <Footerlinks />
    </Container>
  );
}

export default Footer;