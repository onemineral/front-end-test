import React from "react";

import "./styles.scss";

type Props = {
  image: string;
}

const SlideImage: React.FC<Props> = ({ image }) => {
  return (
    <div className="slide__image">
      <img
        src={image}
        alt="ocean slide"
        className="slide__image"
      />
    </div>
  );
};

export default SlideImage;
