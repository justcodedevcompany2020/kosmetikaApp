import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const FavoriteIcon = (props) => (
  <Svg
    width={24}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 7.513c.003 1.71-.59 3.355-1.654 4.59-2.441 2.812-4.81 5.744-7.34 8.453-.581.611-1.502.589-2.057-.05l-7.295-8.402c-2.205-2.54-2.205-6.64 0-9.18a5.611 5.611 0 0 1 1.842-1.422 5.105 5.105 0 0 1 2.198-.5c.755 0 1.503.17 2.197.5.695.33 1.322.815 1.843 1.422L11 3.23l.265-.305a5.642 5.642 0 0 1 1.843-1.42A5.134 5.134 0 0 1 15.305 1c1.52 0 2.973.693 4.04 1.924C20.41 4.16 21.003 5.804 21 7.514Z"
      x={1}
      y={1}
      fill={props.isActive ? "#E0C18F" : "transparent"}
      opacity={props.isActive ? 1 : 0.65}
      stroke={props.isActive ? "" : "white"}
    />
    <Circle
      cx={12}
      cy={30}
      r={2}
      fill={props.isActive ? "#E0C18F" : "transparent"}
      stroke={props.isActive ? "#E0C18F" : "transparent"}
    />
  </Svg>
);

export default FavoriteIcon;
