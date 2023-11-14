import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EmptyOrders = (props) => (
  <Svg
    width={125}
    height={125}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.972 57.823 61.414 37.36l37.614 20.462L62.5 78.914 25.972 57.823Z"
      fill="#D1D1D6"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.028 57.822v42.183L62.5 121.094l-36.528-21.089V57.822L62.5 78.914l36.528-21.092Z"
      fill="#E6E6E6"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m62.5 78.914 36.528-21.092 10.999 17.263-36.528 21.09L62.5 78.913Z"
      fill="#BDBDC1"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62.5 78.914v42.18l-36.528-21.089V57.822L62.5 78.914Z"
      fill="#D1D1D6"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62.5 78.914 25.972 57.822 14.973 75.085l36.528 21.09L62.5 78.913Z"
      fill="#BDBDC1"
    />
    <Path
      d="M91.66 33.27c0-16.215-13.146-29.36-29.36-29.36-16.216 0-29.361 13.145-29.361 29.36 0 16.216 13.145 29.36 29.36 29.36s29.36-13.144 29.36-29.36Z"
      fill="#E0C18F"
    />
    <Path
      d="M62.304 54.592c11.77 0 21.311-9.541 21.311-21.311S74.074 11.97 62.305 11.97c-11.77 0-21.312 9.541-21.312 21.31 0 11.77 9.541 21.312 21.311 21.312Z"
      fill="#E0C18F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.544 23.23a1.22 1.22 0 0 1 .397-1.994 1.22 1.22 0 0 1 1.332.265L62.31 31.538l10.036-10.037a1.22 1.22 0 0 1 1.994.397 1.22 1.22 0 0 1-.265 1.332L64.038 33.267l10.037 10.036a1.222 1.222 0 0 1-1.729 1.728L62.31 34.996 52.273 45.032a1.22 1.22 0 0 1-1.994-.397 1.222 1.222 0 0 1 .265-1.332l10.037-10.036L50.544 23.23Z"
      fill="#1F2024"
    />
  </Svg>
);

export default EmptyOrders;
