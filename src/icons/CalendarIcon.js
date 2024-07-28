import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalendarIcon = ({width = 16, height = 16, fill = 'white', ...props}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.0543 2.33823L14.0543 1.83823L14.0543 2.33823ZM15 3.1212L14.5 3.1212L14.5 3.1212L15 3.1212ZM1 3.12119L0.5 3.12119L0.5 3.12119L1 3.12119ZM1.94571 2.33823L1.94571 2.83823L1.94571 2.33823ZM14.0543 14.986L14.0543 14.486H14.0543V14.986ZM15 14.203L15.5 14.203L15.5 14.203L15 14.203ZM4.27762 13.0546L4.77762 13.0546L4.77762 13.0546L4.27762 13.0546ZM3.33083 12.2716L3.33083 12.7716L3.3313 12.7716L3.33083 12.2716ZM1.36415 12.5766L1.04454 12.9611L1.04454 12.9611L1.36415 12.5766ZM5.46406 14.986L5.46406 15.486H5.46406V14.986ZM3.41611 14.2793L3.09734 14.6645L3.09734 14.6645L3.41611 14.2793ZM1.47458 5.85294C1.19843 5.85294 0.974576 6.0768 0.974576 6.35294C0.974576 6.62908 1.19843 6.85294 1.47458 6.85294V5.85294ZM14.8814 6.85294C15.1575 6.85294 15.3814 6.62908 15.3814 6.35294C15.3814 6.0768 15.1575 5.85294 14.8814 5.85294V6.85294ZM4.83804 3.96054C4.83804 4.23668 5.0619 4.46054 5.33804 4.46054C5.61418 4.46054 5.83804 4.23668 5.83804 3.96054H4.83804ZM5.83804 1C5.83804 0.723858 5.61418 0.5 5.33804 0.5C5.0619 0.5 4.83804 0.723858 4.83804 1H5.83804ZM10.533 3.96054C10.533 4.23668 10.7568 4.46054 11.033 4.46054C11.3091 4.46054 11.533 4.23668 11.533 3.96054H10.533ZM11.533 1C11.533 0.723858 11.3091 0.5 11.033 0.5C10.7568 0.5 10.533 0.723858 10.533 1H11.533ZM5.27119 8.52941C4.99504 8.52941 4.77119 8.75327 4.77119 9.02941C4.77119 9.30555 4.99504 9.52941 5.27119 9.52941V8.52941ZM5.38983 9.52941C5.66597 9.52941 5.88983 9.30555 5.88983 9.02941C5.88983 8.75327 5.66597 8.52941 5.38983 8.52941V9.52941ZM5.27119 10.7941C4.99504 10.7941 4.77119 11.018 4.77119 11.2941C4.77119 11.5703 4.99504 11.7941 5.27119 11.7941V10.7941ZM5.38983 11.7941C5.66597 11.7941 5.88983 11.5703 5.88983 11.2941C5.88983 11.018 5.66597 10.7941 5.38983 10.7941V11.7941ZM8.11864 8.52941C7.8425 8.52941 7.61864 8.75327 7.61864 9.02941C7.61864 9.30555 7.8425 9.52941 8.11864 9.52941V8.52941ZM8.23729 9.52941C8.51343 9.52941 8.73729 9.30555 8.73729 9.02941C8.73729 8.75327 8.51343 8.52941 8.23729 8.52941V9.52941ZM8.11864 10.7941C7.8425 10.7941 7.61864 11.018 7.61864 11.2941C7.61864 11.5703 7.8425 11.7941 8.11864 11.7941V10.7941ZM8.23729 11.7941C8.51343 11.7941 8.73729 11.5703 8.73729 11.2941C8.73729 11.018 8.51343 10.7941 8.23729 10.7941V11.7941ZM10.9661 8.52941C10.69 8.52941 10.4661 8.75327 10.4661 9.02941C10.4661 9.30555 10.69 9.52941 10.9661 9.52941V8.52941ZM11.0847 9.52941C11.3609 9.52941 11.5847 9.30555 11.5847 9.02941C11.5847 8.75327 11.3609 8.52941 11.0847 8.52941V9.52941ZM10.9661 10.7941C10.69 10.7941 10.4661 11.018 10.4661 11.2941C10.4661 11.5703 10.69 11.7941 10.9661 11.7941V10.7941ZM11.0847 11.7941C11.3609 11.7941 11.5847 11.5703 11.5847 11.2941C11.5847 11.018 11.3609 10.7941 11.0847 10.7941V11.7941ZM14.0543 14.486H5.46406V15.486H14.0543V14.486ZM1.5 11.8346L1.5 3.12119L0.5 3.12119L0.5 11.8346L1.5 11.8346ZM1.94571 2.83823L14.0543 2.83823L14.0543 1.83823L1.94571 1.83823L1.94571 2.83823ZM14.5 3.1212L14.5 14.203L15.5 14.203L15.5 3.1212L14.5 3.1212ZM14.0543 2.83823C14.2054 2.83823 14.3275 2.88923 14.4041 2.9527C14.4797 3.01528 14.5 3.07718 14.5 3.1212L15.5 3.1212C15.5 2.32841 14.7602 1.83823 14.0543 1.83823L14.0543 2.83823ZM1.5 3.12119C1.5 3.07717 1.52026 3.01528 1.59585 2.95269C1.6725 2.88923 1.79457 2.83823 1.94571 2.83823L1.94571 1.83823C1.23979 1.83823 0.5 2.32841 0.5 3.12119L1.5 3.12119ZM3.73488 13.8941C3.06743 13.3418 2.17569 12.6009 1.68376 12.192L1.04454 12.9611C1.53649 13.37 2.42896 14.1114 3.09734 14.6645L3.73488 13.8941ZM14.0543 15.486C14.7602 15.486 15.5 14.9958 15.5 14.203L14.5 14.203C14.5 14.247 14.4797 14.3089 14.4042 14.3715C14.3275 14.435 14.2054 14.486 14.0543 14.486L14.0543 15.486ZM3.77762 13.0546L3.77762 15L4.77762 15L4.77762 13.0546L3.77762 13.0546ZM1 12.7716L3.33083 12.7716L3.33083 11.7716L1 11.7716L1 12.7716ZM4.77762 13.0546C4.77762 12.2611 4.03676 11.771 3.33037 11.7716L3.3313 12.7716C3.48257 12.7715 3.60482 12.8224 3.6816 12.8859C3.75733 12.9486 3.77762 13.0105 3.77762 13.0546L4.77762 13.0546ZM0.5 11.8346C0.5 12.2762 0.706669 12.6802 1.04454 12.9611L1.68376 12.192C1.55465 12.0847 1.5 11.9541 1.5 11.8346L0.5 11.8346ZM5.46406 14.486C5.20667 14.486 4.86955 14.4222 4.53489 14.307C4.19826 14.1912 3.91019 14.0392 3.73488 13.8941L3.09734 14.6645C3.3962 14.9119 3.80448 15.1132 4.20947 15.2526C4.61643 15.3926 5.06619 15.486 5.46406 15.486L5.46406 14.486ZM1.47458 6.85294H14.8814V5.85294H1.47458V6.85294ZM5.83804 3.96054V1H4.83804V3.96054H5.83804ZM11.533 3.96054V1H10.533V3.96054H11.533ZM5.27119 9.52941H5.38983V8.52941H5.27119V9.52941ZM5.27119 11.7941H5.38983V10.7941H5.27119V11.7941ZM8.11864 9.52941H8.23729V8.52941H8.11864V9.52941ZM8.11864 11.7941H8.23729V10.7941H8.11864V11.7941ZM10.9661 9.52941H11.0847V8.52941H10.9661V9.52941ZM10.9661 11.7941H11.0847V10.7941H10.9661V11.7941Z"
      fill={fill}
    />
  </Svg>
);
export default CalendarIcon;