import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EmailIcon(props) {
  return (
    <Svg
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.4 0H1.6C.72 0 .008.675.008 1.5L0 10.5c0 .825.72 1.5 1.6 1.5h12.8c.88 0 1.6-.675 1.6-1.5v-9c0-.825-.72-1.5-1.6-1.5zm0 10.5H1.6V3L8 6.75 14.4 3v7.5zM8 5.25L1.6 1.5h12.8L8 5.25z"
        fill="#fff"
        fillOpacity={0.83}
      />
    </Svg>
  );
}

export default EmailIcon;
