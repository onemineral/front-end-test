import React from 'react';
import classnames from "classnames";

import "./styles.scss";

type Props = {
  items: number;
  active: number;
  onClick: (active: number) => void;
};

const Dots = React.memo<Props>(({ items, active, onClick }) => {
  return (
    <ul className="dotList">
      {Array.from(Array(items).keys()).map((dot: number) => (
        <li
          key={dot}
          className={classnames("dot", {
            ["active"]: active === dot
          })}
          onClick={() => onClick(dot)}
        />
      ))}
    </ul>
  );
});

export default Dots;