import React from 'react';

import { Grid } from './styles';

import Header from '../Header';
import Video from '../Video';
import SlideTitle from '../SlideTitle';
import Slide from '../Slide';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Video />
      <SlideTitle />
      <Slide />
      <Footer />
    </Grid>
  );
};

export default Layout;