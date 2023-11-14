import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const BackIcon = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      width={32}
      height={32}
      rx={8}
      transform="matrix(-1 0 0 1 32 0)"
      fill="#ECEDEF"
    />
    <Rect
      width={32}
      height={32}
      rx={8}
      transform="matrix(-1 0 0 1 32 0)"
      fill="url(#a)"
    />
    <Path
      d="m13.31 20.161 4.125-4.167-4.125-4.166a1.073 1.073 0 0 1-.23-1.167 1.072 1.072 0 0 1 .574-.58 1.05 1.05 0 0 1 1.155.233l4.88 4.929A1.07 1.07 0 0 1 20 16a1.08 1.08 0 0 1-.31.757l-4.88 4.929a1.051 1.051 0 0 1-1.5 0 1.1 1.1 0 0 1 0-1.525Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-24.8}
        y1={-17.371}
        x2={39.058}
        y2={46.853}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1F2024" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default BackIcon;
