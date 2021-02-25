import React from 'react';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import * as Styled from './StartScreen.style';

const StartScreen = ({onNext}) => {
  return (
    <Styled.MainWrapper>
      <Typography nodeType="heading-1">SIMPLE HABIT</Typography>
      <Button buttonText="Start" onPress={onNext} />
    </Styled.MainWrapper>
  );
};

export default StartScreen;
