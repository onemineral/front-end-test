
import React from 'react';
import classnames from "classnames";

import "./styles.scss";

type Props = {
  text: string;
};

const SlideText = React.memo<Props>(({ text }) => {
  return (
    <div>
      {text}
    </div>
  );
});

export default SlideText;