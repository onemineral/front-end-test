import React from 'react';

import './styles.scss';

import LikeIcon from '../Icons/LikeIcon';

const SlideTitle: React.FC = () => {
  return (
    <div className="slideItem-Container">
      <LikeIcon />
      <div className="slideItem-Text">20% of your booking will support <br></br> these organisations</div>
      <div className="slidItem-VerticalArrow" />
    </div>
  );
}

export default SlideTitle;