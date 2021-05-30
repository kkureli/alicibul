import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackArrowIcon(props) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.615.275a.845.845 0 00-1.2 0L.687 6.099a.69.69 0 00-.199.488.7.7 0 00.2.488L6.415 12.9c.333.34.872.34 1.205 0a.875.875 0 000-1.225L2.614 6.59 7.621 1.5A.882.882 0 007.615.275z"
        fill="#fff"
      />
    </Svg>
  );
}

export default BackArrowIcon;
