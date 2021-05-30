import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PhoneIcon(props) {
  return (
    <Svg
      width={14}
      height={22}
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.056.889H1.944A1.444 1.444 0 00.5 2.333v17.334a1.444 1.444 0 001.444 1.444h10.112a1.444 1.444 0 001.444-1.444V2.333A1.444 1.444 0 0012.056.89zM1.944 2.333h10.112v13H1.944v-13zm0 17.334v-2.89h10.112v2.89H1.944z"
        fill="#fff"
        fillOpacity={0.83}
      />
    </Svg>
  );
}

export default PhoneIcon;
