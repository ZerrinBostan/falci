import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MoreIcon = ({width = 14, height = 14, fill = 'white', ...props}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 14 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.296 3.192C1.85867 3.192 1.48267 3.03733 1.168 2.728C0.858667 2.41333 0.704 2.03733 0.704 1.6C0.704 1.152 0.858667 0.773333 1.168 0.464C1.48267 0.149333 1.85867 -0.00800014 2.296 -0.00800014C2.73867 -0.00800014 3.11467 0.149333 3.424 0.464C3.73867 0.773333 3.896 1.152 3.896 1.6C3.896 2.03733 3.73867 2.41333 3.424 2.728C3.11467 3.03733 2.73867 3.192 2.296 3.192ZM7.1085 3.192C6.67117 3.192 6.29517 3.03733 5.9805 2.728C5.67117 2.41333 5.5165 2.03733 5.5165 1.6C5.5165 1.152 5.67117 0.773333 5.9805 0.464C6.29517 0.149333 6.67117 -0.00800014 7.1085 -0.00800014C7.55117 -0.00800014 7.92717 0.149333 8.2365 0.464C8.55117 0.773333 8.7085 1.152 8.7085 1.6C8.7085 2.03733 8.55117 2.41333 8.2365 2.728C7.92717 3.03733 7.55117 3.192 7.1085 3.192ZM11.921 3.192C11.4837 3.192 11.1077 3.03733 10.793 2.728C10.4837 2.41333 10.329 2.03733 10.329 1.6C10.329 1.152 10.4837 0.773333 10.793 0.464C11.1077 0.149333 11.4837 -0.00800014 11.921 -0.00800014C12.3637 -0.00800014 12.7397 0.149333 13.049 0.464C13.3637 0.773333 13.521 1.152 13.521 1.6C13.521 2.03733 13.3637 2.41333 13.049 2.728C12.7397 3.03733 12.3637 3.192 11.921 3.192Z"
      fill={fill}
    />
  </Svg>
);
export default MoreIcon;