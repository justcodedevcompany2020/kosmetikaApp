import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProductHeart = (props) => (
  <Svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={props.opacity ? props.opacity : 0.35}
      d="M17.946 9.545h-.001l-7.259 7.665-.001.002a.923.923 0 0 1-.301.214l.201.458-.201-.458a.86.86 0 0 1-.694 0l-.202.458.202-.458a.92.92 0 0 1-.301-.214l-.002-.002L1.94 9.347A5.203 5.203 0 0 1 .85 7.603 5.45 5.45 0 0 1 .954 3.5c.28-.64.68-1.21 1.174-1.679l.002-.001C3.997.033 7.085.176 9 2.208l.003.004.672.7.361.376.361-.377.86-.899h.001A4.899 4.899 0 0 1 12.9.87a4.66 4.66 0 0 1 1.92-.37 4.625 4.625 0 0 1 1.909.47c.6.292 1.14.713 1.584 1.237h.001c1.704 1.997 1.566 5.304-.367 7.337Z"
      stroke="#1F2024"
    />
  </Svg>
);

export default ProductHeart;
