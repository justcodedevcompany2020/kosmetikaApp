import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ProfileMail = (props) => (
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
        fill="#E0C18F"
      />
      <Path
        d="M40.013 15.572 30.524 25l9.49 9.428c.17-.358.275-.755.275-1.178v-16.5c0-.423-.104-.82-.276-1.178ZM37.54 14H11.75c-.423 0-.82.104-1.178.276L22.7 26.343a2.752 2.752 0 0 0 3.889 0l12.128-12.067A2.718 2.718 0 0 0 37.539 14ZM9.276 15.572A2.718 2.718 0 0 0 9 16.75v16.5c0 .423.104.82.276 1.178L18.765 25l-9.49-9.428Z"
        fill="#fff"
      />
      <Path
        d="m29.228 26.297-1.343 1.343a4.588 4.588 0 0 1-6.481 0l-1.343-1.343-9.49 9.428c.36.172.756.276 1.179.276h25.789c.423 0 .82-.104 1.178-.276l-9.49-9.428Z"
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

export default ProfileMail
