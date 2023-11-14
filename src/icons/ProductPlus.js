import * as React from "react";
import Svg, { Rect, Mask, Path, G } from "react-native-svg";

const ProductPlus = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={24}
      y={24}
      width={24}
      height={24}
      rx={12}
      transform="rotate(180 24 24)"
      fill="#E0C18F"
    />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={7}
      y={7}
      width={10}
      height={10}
    >
      <Path
        d="M11.375 16.167a.625.625 0 1 0 1.25 0v-3.542h3.542a.625.625 0 1 0 0-1.25h-3.542V7.834a.625.625 0 1 0-1.25 0v3.541H7.834a.625.625 0 1 0 0 1.25h3.541v3.542Z"
        fill="#006FFD"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#fff" d="M17 17H7V7h10z" />
    </G>
  </Svg>
);

export default ProductPlus;
