import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DownArrowIcon(props) {
  return (
    <Svg
      width={13}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.118.84a.768.768 0 000 1.089L6.41 7.136a.628.628 0 00.444.181.636.636 0 00.443-.181l5.294-5.207a.765.765 0 000-1.096.796.796 0 00-1.114 0l-4.62 4.55L2.232.834a.801.801 0 00-1.114.006z"
        fill="#3A2D13"
      />
    </Svg>
  );
}

export default DownArrowIcon;
