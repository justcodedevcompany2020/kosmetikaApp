import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ProfileTg = (props) => (
  <Svg
    width={49}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M42.318 0H6.682A6.682 6.682 0 0 0 0 6.682v35.636A6.682 6.682 0 0 0 6.682 49h35.636A6.682 6.682 0 0 0 49 42.318V6.682A6.682 6.682 0 0 0 42.318 0Z"
        fill="#1C8ADB"
      />
      <Path
        d="m37.847 12.667-.507.184L9.84 22.76a.92.92 0 0 0 .08 1.781l7.12 1.95 1.328 3.897 1.328 3.898a1.264 1.264 0 0 0 2.038.454l3.677-3.475 7.222 4.897c.883.602 2.141.156 2.367-.835l4.783-21.134c.234-1.047-.869-1.907-1.935-1.526Zm-3.51 4.691L21.91 27.515l-.585.479a.632.632 0 0 0-.234.412l-.13 1.08-.36 3.035a.14.14 0 0 1-.23.117.14.14 0 0 1-.048-.095l-1.01-3.032-1.045-3.104a.63.63 0 0 1 .3-.744l12.93-7.41 2.433-1.393c.354-.206.716.242.404.498Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h49v49H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ProfileTg
