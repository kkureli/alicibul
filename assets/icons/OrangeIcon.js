import * as React from 'react';
import Svg, {G, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function OrangeIcon(props) {
  return (
    <Svg
      width={177}
      height={154}
      viewBox="0 0 177 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Rect
          x={8}
          y={4}
          width={160.955}
          height={137.818}
          {...props}
          rx={7}
          fill="url(#prefix__paint0_linear)"
          fillOpacity={0.8}
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={88.478}
          y1={4}
          x2={88.478}
          y2={255.493}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.208} stopColor="#F5953C" />
          <Stop offset={1} stopColor="#ED5D2F" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default OrangeIcon;
