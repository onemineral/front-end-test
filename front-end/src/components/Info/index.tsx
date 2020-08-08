import React from 'react';

import SlideTitle from '../SlideTitle';
import Slide from '../Slide';

import './styles.scss'

const Info: React.FC = () => {
  return (
    <div className="info__container">
      <SlideTitle />
      <Slide />
    </div>
  );
}

export default Info;