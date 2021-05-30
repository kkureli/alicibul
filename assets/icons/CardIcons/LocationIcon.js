import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationIcon(props) {
  return (
    <Svg
      width={11}
      height={13}
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.526.042c2.778 0 5.03 2.224 5.03 4.968 0 2.1-1.494 4.387-4.442 6.888a.91.91 0 01-1.178 0l-.195-.168C1.923 9.294.496 7.063.496 5.01c0-2.744 2.252-4.968 5.03-4.968zm0 3.057c-.514 0-1.006.202-1.368.56A1.899 1.899 0 003.59 5.01c0 .507.204.993.567 1.351.362.359.854.56 1.368.56.513 0 1.005-.201 1.367-.56.363-.358.567-.844.567-1.35 0-.508-.204-.994-.567-1.352a1.947 1.947 0 00-1.367-.56z"
        fill="#9D9686"
      />
    </Svg>
  );
}

export default LocationIcon;
