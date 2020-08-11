import React from 'react';
import './styles.scss'

import Footerlinks from '../FooterLinks';
import FooterOne from './../../assets/img/footer1.png';


const Footer: React.FC = () => {
  return (
    <div style={{ backgroundImage:`url(${FooterOne})` }} className="footer__container">
      <Footerlinks />
    </div>
  );
}

export default Footer;