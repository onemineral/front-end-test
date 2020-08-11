import React from 'react';

import InfoTitle from '../InfoTitle';
import InfoBody from '../InfoBody';

import './styles.scss'

const Info: React.FC = () => {
  return (
    <div className="info__container">
      <InfoTitle />
      <InfoBody />
    </div>
  );
}

export default Info;