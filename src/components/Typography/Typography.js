import React from 'react';
import {StyledTypography} from './Typography.style';

const Typography = React.memo((props) => {
  return <StyledTypography allowFontScaling={false} {...props} />;
});

export default Typography;
