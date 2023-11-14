import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIconCategory = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.25}
      d="m25 25-7.826-7.826M1 10.39a9.391 9.391 0 1 0 18.782 0 9.391 9.391 0 0 0-18.782 0Z"
      stroke="#1F2024"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SearchIconCategory;
