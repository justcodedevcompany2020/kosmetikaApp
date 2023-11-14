import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.25}
      d="m17 17-5.217-5.217M1 7.26a6.26 6.26 0 1 0 12.522 0A6.26 6.26 0 0 0 1 7.26Z"
      stroke="#1F2024"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SearchIcon;
