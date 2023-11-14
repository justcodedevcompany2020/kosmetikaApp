import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const HomeIcon = (props) => (
  <Svg
    width={22}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.5 22a2.4 2.4 0 0 1-1.765-.738A2.43 2.43 0 0 1 0 19.486V8.17c0-.398.089-.775.266-1.131.177-.356.421-.65.734-.88L8.5.503c.23-.168.469-.293.719-.377C9.469.042 9.729 0 10 0c.27 0 .531.042.781.126.25.084.49.21.719.377L19 6.16c.313.23.558.524.735.88.177.356.265.733.265 1.131v11.315c0 .691-.245 1.283-.734 1.776A2.404 2.404 0 0 1 17.5 22h-5v-8.8h-5V22h-5Z"
      x={1}
      y={1}
      fill={props.isActive ? "#E0C18F" : "transparent"}
      opacity={props.isActive ? 1 : 0.65}
      stroke={props.isActive ? "" : "white"}
    />
    <Circle
      cx={11}
      cy={30}
      r={2}
      fill={props.isActive ? "#E0C18F" : "transparent"}
      stroke={props.isActive ? "#E0C18F" : "transparent"}
    />
  </Svg>
);

export default HomeIcon;
