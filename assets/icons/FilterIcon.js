import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FilterIcon(props) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 0v1.162a.57.57 0 00.13.363l6.35 7.634a.57.57 0 01.13.363v7.147c0 .097.023.193.066.275a.473.473 0 00.179.192l3.444 1.463a.377.377 0 00.423-.026.493.493 0 00.15-.19.597.597 0 00.055-.251V9.429a.601.601 0 01.157-.363l6.21-7.52a.57.57 0 00.13-.363V0H0z"
        fill="#E5DECE"
      />
    </Svg>
  );
}

export default FilterIcon;
