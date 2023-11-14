import * as React from "react";
import Svg, { Path } from "react-native-svg";
const StoryCloseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m11.051 9.448 7.695-7.695A1.055 1.055 0 0 0 17.258.264L9.563 7.96 1.868.254A1.056 1.056 0 0 0 .38 1.742l7.695 7.706-7.706 7.695a1.056 1.056 0 1 0 1.488 1.488l7.706-7.695 7.695 7.695a1.055 1.055 0 0 0 1.488-1.488l-7.695-7.695Z"
    />
  </Svg>
);
export default StoryCloseIcon;
