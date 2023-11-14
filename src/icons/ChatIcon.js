import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const ChatIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={85}
    height={85}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      fillOpacity={0.8}
      d="M42.5 85C65.972 85 85 65.972 85 42.5S65.972 0 42.5 0 0 19.028 0 42.5 19.028 85 42.5 85Z"
    />
    <Path
      fill="#fff"
      d="M42.184 18.883c-12.308 0-22.293 9.98-22.293 22.294 0 4.61 1.402 8.892 3.8 12.447l-3.294 12.299 14.159-3.796a22.182 22.182 0 0 0 7.629 1.343c12.314 0 22.299-9.979 22.299-22.293 0-12.315-9.985-22.294-22.3-22.294ZM31.78 45.66a3.46 3.46 0 1 1-.001-6.919 3.46 3.46 0 0 1 0 6.919Zm10.454 0a3.46 3.46 0 1 1-.001-6.919 3.46 3.46 0 0 1 0 6.919Zm10.448 0a3.456 3.456 0 0 1-3.46-3.46 3.46 3.46 0 1 1 3.46 3.46Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-65.874}
        x2={103.747}
        y1={-46.143}
        y2={124.453}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1F2024" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ChatIcon;
