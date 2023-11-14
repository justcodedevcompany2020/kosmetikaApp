import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TrashIcon = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.166 4.667h-4.083L16.916 3.5h-5.833L9.916 4.667H5.833V7h16.333M7 22.167A2.333 2.333 0 0 0 9.333 24.5h9.333A2.333 2.333 0 0 0 21 22.167v-14H7v14Z"
      fill="#1F2024"
      opacity={0.25}
    />
  </Svg>
);

export default TrashIcon;
