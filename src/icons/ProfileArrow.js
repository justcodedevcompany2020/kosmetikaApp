import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileArrow = (props) => (
  <Svg
    width={8}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.25}
      d="M7.19 2.339 3.065 6.506l4.125 4.166a1.072 1.072 0 0 1 .23 1.167 1.071 1.071 0 0 1-.574.58 1.05 1.05 0 0 1-1.155-.233L.81 7.257A1.07 1.07 0 0 1 .5 6.5a1.079 1.079 0 0 1 .31-.757L5.69.814a1.051 1.051 0 0 1 1.5 0 1.1 1.1 0 0 1 0 1.525Z"
      fill="#1F2024"
    />
  </Svg>
)

export default ProfileArrow
