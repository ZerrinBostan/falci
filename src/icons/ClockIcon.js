import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ClockIcon = ({width = 14, height = 14, fill = 'white', ...props}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 0C10.85 0 14 3.15 14 7C14 10.85 10.85 14 7 14C3.15 14 0 10.85 0 7C0 3.15 3.15 0 7 0ZM10.01 9.45L10.5 8.54L7.7 6.93V3.5H6.65V7.56L10.01 9.45Z"
      fill={fill}
    />
  </Svg>
);
export default ClockIcon;
