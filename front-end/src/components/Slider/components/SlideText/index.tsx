import React from "react";

import "./styles.scss";

type Props = {
  tag: string;
  title: string;
  text: string;
};

const SlideText = React.memo<Props>(({ tag, title, text }) => {
  let newText = text.split("\n").map((i) => {
    return <p>{i}</p>;
  });

  return (
    <div className="slide__wrapper">
      <div className="slide__body">
        <div className="slide__tag">{tag}</div>
        <div className="slide__title">{title}</div>
        <div className="slide__text">{newText}</div>
      </div>

      <div className="slide__footer">FIND OUT MORE</div>
    </div>
  );
});

export default SlideText;
