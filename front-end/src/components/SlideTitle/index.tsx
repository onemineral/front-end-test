import React from 'react';

import './styles.scss';

import {ReactComponent as HearthIcon} from '../../assets/icons/heart.svg';

const SlideTitle: React.FC = () => {
  return (
    <div className="slideItem__container">
      <HearthIcon />
      <div className="slideItem__text">20% of your booking will support <br></br> these organisations</div>
      <div className="slidItem__verticalArrow" />
    </div>
  );
}

export default SlideTitle;