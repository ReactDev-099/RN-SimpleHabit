import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Typography from '../../components/Typography';
import * as Styled from './JournalScreen.style';

const JournalScreen = ({ info, onNext, onPrev, onReset }) => {
  const {
    fields: {
      richQuestion: { content },
      placeholder,
      buttonText,
    },
  } = info;
  return (
    <Styled.JournalScreenWrapper>
      <Styled.ContentWrapper>
        <Header onBack={onPrev} onReset={onReset} />
        {content?.map((item, index) => {
          const { nodeType, content: textContent } = item;
          return textContent[0].value ? (
            <Typography
              key={`${index}-${textContent[0].value}`}
              color="violet"
              nodeType={nodeType}
              numberOfLines={nodeType === 'heading-1' ? 3 : 100}>
              {textContent[0].value}
            </Typography>
          ) : null;
        })}
        <Styled.ResponseInput
          multiline
          numberOfLines={4}
          placeholder={placeholder}
        />
      </Styled.ContentWrapper>
      <Button onPress={onNext} buttonText={buttonText} />
    </Styled.JournalScreenWrapper>
  );
};

export default JournalScreen;
