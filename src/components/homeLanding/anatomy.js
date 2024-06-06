import React, { useEffect, useState } from "react";
import left1 from "../../assets/faceAnimation/left1.svg";
import left2 from "../../assets/faceAnimation/left2.svg";
import left3 from "../../assets/faceAnimation/left3.svg";
import left4 from "../../assets/faceAnimation/left4.svg";
import left5 from "../../assets/faceAnimation/left5.svg";
import left6 from "../../assets/faceAnimation/left6.svg";
import left7 from "../../assets/faceAnimation/left7.svg";
import left8 from "../../assets/faceAnimation/left8.svg";
import leftFace from "../../assets/faceAnimation/leftFace.svg";
import fullImage from "../../assets/faceAnimation/fullImage.svg";
import right1 from "../../assets/faceAnimation/right1.svg";
import right2 from "../../assets/faceAnimation/right2.svg";
import right3 from "../../assets/faceAnimation/right3.svg";
import right4 from "../../assets/faceAnimation/right4.svg";
import right5 from "../../assets/faceAnimation/right5.svg";
import right6 from "../../assets/faceAnimation/right6.svg";
import right7 from "../../assets/faceAnimation/right7.svg";
import right8 from "../../assets/faceAnimation/right8.svg";

import cx from "classnames";

const Anatomy = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 18) {
      setTimeout(() => {
        setCount(count + 1);
      }, 2000);
    }
  }, [count]);

  const images = [
    {
      face: leftFace,
    },
    {
      face: left1,
    },
    {
      face: left2,
    },
    {
      face: left3,
    },
    {
      face: left4,
    },
    {
      face: left5,
    },
    {
      face: left6,
    },
    {
      face: left7,
    },
    {
      face: left8,
    },
    {
      face: fullImage,
    },
    {
      face: right1,
    },
    {
      face: right2,
    },
    {
      face: right3,
    },
    {
      face: right4,
    },
    {
      face: right5,
    },
    {
      face: right6,
    },
    {
      face: right7,
    },
    {
      face: right8,
    },
  ];
  return (
    <div className="relative min-h-full md:h-auto">
      {Array.isArray(images) &&
        images.map(({ face }, index) => (
          <div
            key={index}
            className={cx(
              "absolute w-[90%] sm:w-[60%] md:w-full -mx-4 md:mx-auto left-8 sm:left-0 xl:left-[9%] -top-14 md:top-[70px] xl:top-[10%]"
            )}
          >
            <img
              src={face}
              alt="faces"
              className={cx(
                "transition-all opacity-0 duration-200 object-contain",
                {
                  "opacity-90": count > index,
                }
              )}
            />
          </div>
        ))}
    </div>
  );
};

export default Anatomy;
