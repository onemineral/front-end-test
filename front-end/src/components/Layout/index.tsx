import React from 'react';

import './styles.scss'

import Header from '../Header';
import Video from '../Video';
import Info from '../Info';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <div className="app__container">
      <Header />
      <Video />
      <Info />
      <Footer />
    </div>
  );
};

export default Layout;