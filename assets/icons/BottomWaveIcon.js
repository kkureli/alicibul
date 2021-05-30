import * as React from 'react';
import Svg, {Mask, Rect, G, Path} from 'react-native-svg';

function BottomWaveIcon(props) {
  return (
    <Svg
      width={375}
      height={197}
      viewBox="0 0 375 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={19}
        y={0}
        width={337}
        height={166}>
        <Rect
          x={19.5}
          y={0.5}
          width={336}
          height={164.985}
          rx={6.5}
          fill="#4E5257"
          stroke="#4E5257"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          d="M160.5 109C75.765 107.606-52 65-52 65v139h502.5l24-181s-186.876 88.091-314 86z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default BottomWaveIcon;
