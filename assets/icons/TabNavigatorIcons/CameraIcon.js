import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CameraIcon(props) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 6.889a2.222 2.222 0 012.222-2.222h1.034a2.222 2.222 0 001.848-.99l.903-1.355a2.222 2.222 0 011.849-.989h4.288a2.223 2.223 0 011.85.99l.902 1.355a2.222 2.222 0 001.848.989h1.034A2.222 2.222 0 0121 6.889v10a2.222 2.222 0 01-2.222 2.222H3.222A2.222 2.222 0 011 16.89v-10z"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
      <Path
        d="M14.333 11.333a3.334 3.334 0 11-6.667 0 3.334 3.334 0 016.667 0v0z"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
}

export default CameraIcon;
