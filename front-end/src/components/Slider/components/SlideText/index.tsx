import React, {useRef} from "react";
import classnames from "classnames";

import "./styles.scss";

type Props = {
  tag: string;
  title: string;
  text: string;
};

const SlideText = React.memo<Props>(({ tag, title, text }) => {

  function nl2br(str: any){
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
   }

  return (
    <div className="slide__wrapper">
      <div className="slide__body">
        <div className="slide__tag">{tag}</div>
        <div className="slide__title">{title}</div>
        <div className="slide__text">{(nl2br(text))}</div>

      </div>

      <div className="slide__footer">FIND OUT MORE</div>
    </div>
  );
});

export default SlideText;
