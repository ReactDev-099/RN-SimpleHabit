import React from 'react';
import { StyledImage } from './IntroImage.style';

const IntroImage = React.memo((props) => {
    return <StyledImage {...props} />;
});

export default IntroImage;
