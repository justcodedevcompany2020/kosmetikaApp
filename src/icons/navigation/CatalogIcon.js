import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const CatalogIcon = (props) => (
  <Svg
    width={24}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.991 0H1.675C.751 0 0 .751 0 1.675v6.316c0 .924.751 1.675 1.675 1.675h6.316c.924 0 1.675-.751 1.675-1.675V1.675C9.666.751 8.915 0 7.991 0ZM20.325 0h-6.316c-.924 0-1.675.751-1.675 1.675v6.316c0 .924.751 1.675 1.675 1.675h6.316c.924 0 1.675-.751 1.675-1.675V1.675C22 .751 21.248 0 20.325 0ZM7.991 12.334H1.675c-.924 0-1.675.751-1.675 1.675v6.316C0 21.249.751 22 1.675 22h6.316c.924 0 1.675-.751 1.675-1.675v-6.316c0-.924-.751-1.675-1.675-1.675ZM20.325 12.334h-6.316c-.924 0-1.675.751-1.675 1.675v6.316c0 .924.751 1.675 1.675 1.675h6.316c.924 0 1.675-.751 1.675-1.675v-6.316c0-.924-.752-1.675-1.675-1.675Z"
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

export default CatalogIcon;
