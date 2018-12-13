import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HeatIcon = props => (
  <Svg
    style={{ backgroundColor: 'red' }}
    height={130}
    width={130}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <Path d="M433 45c50 134 24 207-32 265-61 64-156 112-223 206C89 641 74 916 395 988c-135-71-164-277-18-406-38 125 32 205 119 176 85-29 141 32 139 102-1 48-20 89-69 112 209-37 293-210 293-342 0-174-155-198-77-344-93 8-125 69-116 169 6 66-63 111-114 81-41-25-40-73-4-109 77-76 107-251-115-382z" />
  </Svg>
);

export default HeatIcon;
