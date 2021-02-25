import React from 'react';
import Typography from '../Typography';
import * as Styled from './Button.style';

const Button = ({buttonText, onPress}) => {
  return (
    <Styled.Button onPress={onPress}>
      <Typography nodeType="heading-4" color="white">
        {buttonText}
      </Typography>
    </Styled.Button>
  );
};

export default Button;
