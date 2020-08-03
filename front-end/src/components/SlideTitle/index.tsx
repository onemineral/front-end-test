import React from 'react';

import { Container, Text, VerticalArrow } from './styles';

import LikeIcon from '../Icons/LikeIcon';

const SlideTitle: React.FC = () => {
  return (
    <Container>
      <LikeIcon />
      <Text>20% of your booking will support <br></br> these organisations</Text>
      <VerticalArrow />
    </Container>
  );
}

export default SlideTitle;