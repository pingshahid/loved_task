import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CrossButton() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" >
      <Path
        d="M2 14l6.432-6.432L14 2M14 14L7.568 7.568 2 2"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default CrossButton;
