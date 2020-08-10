import React, { useState } from "react";
import Dots  from "./components/Dots/Dots";
import { ReactComponent as LeftArrow } from "./../../assets/icons/leftArrow.svg";
import { ReactComponent as RightArrow } from "./../../assets/icons/rightArrow.svg";

import "./styles.scss";

type Props = {
  slides: any[];
  children: (props: any) => JSX.Element;
  visibleItemsNumber?: number;
};

const Slider = React.memo<Props>(
  ({ slides, children, visibleItemsNumber = 3 }) => {
    const [start, setStart] = useState(0);

    const isControlsVisible = slides.length > visibleItemsNumber;

    const visibleItems = isControlsVisible
      ? slides
          .concat(slides.slice(0, visibleItemsNumber))
          .slice(start, start + visibleItemsNumber)
      : slides;

    const onNextClick = () => {
      setStart(start + 1 >= slides.length ? 0 : start + 1);
    };

    const onPrevClick = () => {
      setStart(start - 1 >= 0 ? start - 1 : slides.length - 1);
    };

    return (
      <div>
        <div className="slides">
          {isControlsVisible && (
            <LeftArrow onClick={onPrevClick} className="navButtons" />
          )}

          <ul className="list">
            {visibleItems.map((slide: any) =>
              children ? children(slide) : null
            )}
          </ul>

          {isControlsVisible && (
            <RightArrow onClick={onNextClick} className="navButtons" />
          )}
        </div>

        {isControlsVisible && (
          <div className="dotsControls">
            <Dots
              items={slides.length}
              active={start}
              onClick={(active: number) => setStart(active)}
            />
          </div>
        )}
      </div>
    );
  }
);

export default Slider;      

