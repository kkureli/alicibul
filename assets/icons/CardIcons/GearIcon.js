import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GearIcon(props) {
  return (
    <Svg
      width={15}
      height={13}
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.21 4.185a1.257 1.257 0 100-2.515 1.257 1.257 0 000 2.515zM7.61 4.185a1.257 1.257 0 100-2.515 1.257 1.257 0 000 2.515zM12.012 4.185a1.257 1.257 0 100-2.515 1.257 1.257 0 000 2.515zM3.21 11.73a1.257 1.257 0 100-2.515 1.257 1.257 0 000 2.515zM7.61 11.73a1.257 1.257 0 100-2.515 1.257 1.257 0 000 2.515zM3.21 4.185v5.03M7.61 4.185v5.03"
        stroke="#9D9686"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.012 4.185v1.258A1.258 1.258 0 0110.754 6.7H3.21"
        stroke="#9D9686"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default GearIcon;
