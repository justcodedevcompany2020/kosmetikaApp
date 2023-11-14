import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const ProfileIcon = (props) => (
  <Svg
    style={{ display: "flex", alignItems: "center" }}
    width={22}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 12.551c1.499 0 2.884-.4 3.992-1.078a2.35 2.35 0 0 1 2.73.214c2.093 1.797 3.282 4.345 3.278 7.022v1.147C20 21.042 18.983 22 17.73 22H2.27C1.018 22 0 21.042 0 19.856v-1.147c-.009-2.673 1.18-5.225 3.274-7.017a2.35 2.35 0 0 1 2.73-.215c1.112.675 2.493 1.074 3.996 1.074ZM10 10.64c3.105 0 5.622-2.383 5.622-5.32C15.622 2.382 13.105 0 10 0S4.378 2.382 4.378 5.32c0 2.937 2.517 5.32 5.622 5.32Z"
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

export default ProfileIcon;
