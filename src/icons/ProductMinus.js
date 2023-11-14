import * as React from "react";
import Svg, { Rect, Mask, Path, G } from "react-native-svg";

const ProductMinus = (props) => (
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
      x={8}
      y={11}
      width={8}
      height={2}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.042 12.012c0-.346.28-.625.625-.625h6.667a.625.625 0 0 1 0 1.25H8.667a.625.625 0 0 1-.625-.625Z"
        fill="#006FFD"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#fff" d="M17 17H7V7h10z" />
    </G>
  </Svg>
);

export default ProductMinus;
