import React from 'react';

import SlideTitle from '../SlideTitle';
import Slide from '../Slide';

import { Container } from './styles';

const Info: React.FC = () => {
  return (
    <Container>
      <SlideTitle />
      <Slide />
    </Container>
  );
}

export default Info;